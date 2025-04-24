import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});
console.log("API is correct");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("🟢 /api/chat handler invoked");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { messages } = req.body as { messages: { role: string; content: string }[] };
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages as any[],
    });

    const reply = response.choices?.[0]?.message;
    return res.status(200).json({ reply });
  } catch (err: any) {
    console.error("❌ OpenAI API Error:", err);
    return res.status(500).json({ error: err.message || "Chat failed" });
  }
}
