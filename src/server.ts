// // server.ts
// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import { ChatOpenAI } from "@langchain/openai";
// import { z } from "zod";

// dotenv.config();

// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(bodyParser.json());

// const schema = z.object({
//   messages: z.array(
//     z.object({
//       role: z.enum(["system", "user", "assistant"]),
//       content: z.string(),
//     })
//   ),
// });

// app.post("/api/chat", async (req, res) => {
//   try {
//     const parsed = schema.parse(req.body);
//     const chatModel = new ChatOpenAI({
//       modelName: "gpt-4o-mini", // or "gpt-4o-mini"
//       temperature: 0.7,
//     });

//     const reply = await chatModel.invoke(parsed.messages);
//     res.json({ reply });
//   } catch (err) {
//     console.error("⮕ [Server] Chat error:", err);
//     res.status(500).json({ error: "Chat failed" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });








// File: /api/chat.ts
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { RetrievalQAChain } from "langchain/chains";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import fs from "fs/promises";

export const config = {
  runtime: "edge", // optional for Vercel
};

export default async function handler(req: Request) {
  try {
    const { messages } = await req.json();
    const userMessage = messages.findLast((m: any) => m.role === "user");
    if (!userMessage?.content) {
      return new Response(JSON.stringify({ error: "No user message" }), { status: 400 });
    }

    // Load stored embeddings
    const rawData = await fs.readFile("./assets/resume_embeddings.json", "utf8");
    const parsedData = JSON.parse(rawData);

    const vectorStore = await MemoryVectorStore.fromTexts(
      parsedData.texts,
      parsedData.metadatas,
      new OpenAIEmbeddings()
    );

    const model = new ChatOpenAI({ modelName: "gpt-4o-mini", temperature: 0.3 });
    const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever());

    const response = await chain.call({ query: userMessage.content });

    return new Response(JSON.stringify({ reply: { content: response.text } }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("/api/chat error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
