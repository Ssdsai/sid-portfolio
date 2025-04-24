// Client-side React component: src/components/Chatbot.tsx
import React, { useState, useEffect, useRef } from "react";
import { FaComments } from "react-icons/fa";
import type { IconBaseProps } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";

// Cast react-icons component to a valid React component type for TSX
const CommentsIcon = FaComments as React.ComponentType<IconBaseProps>;

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are an expert assistant familiar with Sai Dhanush Soma's background.
Name: SAI DHANUSH SOMA
Location: Chicago, IL | Phone: 773-970-6599 | Email: stevesid161201@gmail.com | LinkedIn: https://www.linkedin.com/in/ssdhanush/

SUMMARY
Aspiring Software Engineer with 1.5 years experience, proficient in building scalable solutions, problem-solving, system design, and agile methodologies. Skilled in data structures, algorithms, modern tech.

SKILLS
Python, Core Java, Java Servlets, Langchain, Flask, Maven, Tomcat, SQL, NoSQL, Spring Boot, REST, HTML, CSS, JS, React, Express, Node, Next, TS, Tailwind, DSA, Docker, Git, Prometheus, Grafana, OpenAI, Twilio, Numpy, Pandas, Matplotlib, sklearn, Tensorflow, NLTK, Keras.

WORK EXPERIENCE
• Research Intern at La Trobe University: Integrated Python REST APIs on Raspberry Pi, built Grafana dashboards, boosted efficiency by 20%.
• Software Developer at Capgemini: MERN full-stack platform with Twilio OTP, enhanced UI/UX, collaborated in Agile teams.

PROJECTS
• Smartnest: ReactJS frontend, Java Servlets backend, AI recommendation agents with LangChain & GPT-4o-mini, improved wait times by 75%.
• Credit Card Fraud Detection: UMAP/PCA preprocessing, Random Forest and MLP, achieved 92% accuracy.

EDUCATION
• MS CS, Illinois Tech (3.33/4.0)
• BTech CS, Presidency University (3.68/4.0)

If you cannot answer, say: "For more details, please contact Sai Dhanush Soma at 773-970-6599 or stevesid161201@gmail.com."`;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "system", content: SYSTEM_PROMPT }]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
  
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const { reply } = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: reply.content }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "For more details, please contact Sai Dhanush Soma at 773-970-6599 or stevesid161201@gmail.com." }]);
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        className="fixed bottom-6 right-6 bg-sky-600 text-white p-4 rounded-full shadow-lg hover:bg-sky-700 z-50"
        onClick={() => setOpen(o => !o)}
      >
        <CommentsIcon size={24} />
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-24 right-6 w-80 max-h-96 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-50"
          >
            <div className="bg-sky-600 text-white p-3 font-semibold">Chat with me</div>
            <div ref={scrollRef} className="flex-1 p-3 overflow-y-auto space-y-2">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === "user"
                      ? "text-right"
                      : m.role === "assistant"
                      ? "text-left"
                      : "hidden"
                  }
                >
                  <span
                    className={
                      m.role === "user"
                        ? "inline-block bg-sky-100 text-sky-900 p-2 rounded-lg"
                        : "inline-block bg-gray-100 text-gray-900 p-2 rounded-lg"
                    }
                  >
                    {m.content}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-2 border-t flex">
              <input
                className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
              />
              <button
                onClick={handleSend}
                className="bg-sky-600 text-white px-4 rounded-r-lg hover:bg-sky-700"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/*
Serverless function: api/chat.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { messages } = req.body;
    const chat = await openai.chat.completions.create({ model: "gpt-3.5-turbo", messages });
    res.status(200).json({ reply: chat.choices[0].message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Chat failed" });
  }
}
*/