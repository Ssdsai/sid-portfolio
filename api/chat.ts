// api/chat.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

// Initialize OpenAI client (will throw if API key is missing)
if (!process.env.OPENAI_API_KEY) {
  console.error("❌ Missing OPENAI_API_KEY in env");
}
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("🟢 /api/chat handler invoked, method=", req.method);
  console.log("➡️  Hello endpoint hit");
  res.status(200).json({ pong: true });

  if (req.method !== "POST") {
    console.log("⚠️  Method not allowed:", req.method);
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Parse body
  let payload: any;
  try {
    payload = req.body;
    console.log("📬 Payload:", payload);
  } catch (err) {
    console.error("❌ Failed to parse JSON body:", err);
    return res.status(400).json({ error: "Invalid JSON" });
  }

  // Chat branch
  if (Array.isArray(payload.messages)) {
    console.log("💬 Chat branch, messages length =", payload.messages.length);
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: payload.messages as any[],
      });
      const reply = completion.choices?.[0]?.message;
      console.log("✅ OpenAI reply:", reply);
      return res.status(200).json({ reply });
    } catch (err: any) {
      console.error("❌ OpenAI API error:", err);
      return res.status(500).json({ error: err.message || "OpenAI Error" });
    }
  }

  // Image-ticket branch (if you still need it)
  if (payload.image_data) {
    console.log("📸 Ticket branch with image_data");
    // … your existing Flask‐forwarding logic here, each step logging …
    // Make absolutely sure you return in every possible code path!
  }

  // If nothing matched
  console.log("⚠️  No handler branch matched");
  return res.status(400).json({ error: "Unsupported payload" });
}
