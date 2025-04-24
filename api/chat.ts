// api/chat.ts

import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

// Initialize with your secret key (must be set in env vars)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only accept POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Expect body: { messages: [{ role: string, content: string }, ...] }
    const { messages } = req.body as { messages: Array<{ role: string; content: string }> };

    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid or missing `messages` array' });
    }

    // Call OpenAI chat completion, casting messages to any[] to satisfy TS
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages as any[],
    });

    const reply = completion.choices?.[0]?.message;
    if (!reply) throw new Error('No reply from OpenAI');

    return res.status(200).json({ reply });
  } catch (err: any) {
    console.error('OpenAI error:', err);
    return res.status(500).json({ error: err.message || 'Chat failed' });
  }
}
