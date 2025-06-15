// // api/chat.ts
// import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";

// export const config = { runtime: "edge" };

// function cosineSimilarity(a: number[], b: number[]): number {
//   const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
//   const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
//   const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
//   return dot / (magA * magB);
// }

// export default async function handler(req: Request) {
//   try {
//     const { messages } = await req.json();
//     const userInput = messages.findLast((m: any) => m.role === "user")?.content;
//     if (!userInput) return new Response("No user input", { status: 400 });

//     // Load from /public/resume_embedding.json using fetch
//     const url =
//       process.env.VERCEL_URL
//         ? `https://${process.env.VERCEL_URL}/resume_embedding.json`
//         : `http://localhost:3000/resume_embedding.json`;

//     const res = await fetch(url);
//     if (!res.ok) throw new Error("Could not load embedding JSON");
//     const entries: { input: string; embedding: number[] }[] = await res.json();

//     const embedder = new OpenAIEmbeddings();
//     const userEmbedding = await embedder.embedQuery(userInput);

//     const topChunks = entries
//       .map(e => ({
//         ...e,
//         score: cosineSimilarity(userEmbedding, e.embedding),
//       }))
//       .sort((a, b) => b.score - a.score)
//       .slice(0, 3)
//       .map(e => e.input)
//       .join("\n");

//     const llm = new ChatOpenAI({ modelName: "gpt-4o-mini", temperature: 0.3 });
//     const systemPrompt = `
// You are an AI assistant helping users learn about Sai Dhanush Soma based on his resume.
// Use the context below to answer the question in a helpful and conversational tone.

// Context:
// ${topChunks}
// `;

//     const reply = await llm.call([
//       { role: "system", content: systemPrompt },
//       { role: "user", content: userInput },
//     ]);

//     return new Response(JSON.stringify({ reply: { content: reply.content } }), {
//       headers: { "Content-Type": "application/json" },
//     });

//   } catch (err) {
//     console.error("API error:", err);
//     return new Response(JSON.stringify({ error: "Server error occurred" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }


/// /api/chat.ts
import { OpenAI } from "openai";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cosineSimilarity } from "@/utils/cosine"; // helper file you'll add

export const config = {
  runtime: "edge",
};

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const userQuestion = messages[messages.length - 1]?.content;

    // Fetch embeddings
    const baseURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseURL}/resume_embedding.json`);
    const embeddingData = await res.json(); // [{ input, embedding }]

    // Embed the user's question
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: userQuestion,
    });
    const userEmbedding = embeddingResponse.data[0].embedding;

    // Find the closest chunk
    let bestChunk = null;
    let bestScore = -Infinity;

    for (const chunk of embeddingData) {
      const score = cosineSimilarity(userEmbedding, chunk.embedding);
      if (score > bestScore) {
        bestScore = score;
        bestChunk = chunk.input;
      }
    }

    // Ask GPT with the best chunk as context
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant who answers questions about Sai Dhanush Soma’s resume.",
        },
        {
          role: "user",
          content: `Here is some context from the resume:\n\n"${bestChunk}"\n\nNow answer this question: ${userQuestion}`,
        },
      ],
    });

    const reply = chatResponse.choices[0].message;
    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error("❌ Server error:", err);
    return NextResponse.json(
      {
        reply: {
          role: "assistant",
          content:
            "Oops! Something went wrong. Please contact Sai at stevesid161201@gmail.com.",
        },
      },
      { status: 500 }
    );
  }
}
