from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from openai import OpenAI
from dotenv import load_dotenv
import openai
import os
import json

load_dotenv()

# Load OpenAI API key from environment variables
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Define FastAPI app
app = FastAPI()

# Allow frontend dev server to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*","http://localhost:3000", 
        "https://www.saidhanush.xyz",
        "https://sid-portfolio-rho.vercel.app"],  # React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load resume embedding JSON file from public directory
#Breaking Change - embedding_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../public/resume_embedding.json"))
embedding_path = os.path.join(os.path.dirname(__file__), "resume_embedding.json")
with open(embedding_path, "r", encoding="utf-8") as f:
    EMBEDDING_DATA = json.load(f)

# Request message model
class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]

# Function to calculate cosine similarity between vectors
def cosine_similarity(vec1, vec2):
    dot = sum(a * b for a, b in zip(vec1, vec2))
    norm1 = sum(a * a for a in vec1) ** 0.5
    norm2 = sum(b * b for b in vec2) ** 0.5
    return dot / (norm1 * norm2)

# POST endpoint for chat
@app.post("/api/chat")
async def chat(request: ChatRequest):
    user_input = request.messages[-1].content

    # Embed the user's query
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=user_input
    )
    query_embedding = response.data[0].embedding

    # Find the most relevant text chunk from the resume
    best_match = max(EMBEDDING_DATA, key=lambda item: cosine_similarity(item["embedding"], query_embedding))
    context = best_match["text"]

    # Build the prompt with context
    system_prompt = (
        "You are a friendly, helpful assistant who knows everything about Sai Dhanush Soma based on the resume below. "
        "Answer user queries using the following resume content:\n\n"
        f"{context}\n\n"
    )

    full_messages = [
        {"role": "system", "content": system_prompt},
        *[{"role": m.role, "content": m.content} for m in request.messages]
    ]

    # Generate the response using GPT-4o
    chat_response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=full_messages,
        max_tokens=500
    )

    return {
        "reply": {
            "role": "assistant",
            "content": chat_response.choices[0].message.content
        }
    }