// src/components/Chatbot.tsx
import React, { useState, useEffect, useRef } from "react";
import { FaComments } from "react-icons/fa";
import type { IconBaseProps } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";

// Properly type the icon
const CommentsIcon = FaComments as React.ComponentType<IconBaseProps>;

interface Message {
  role: "system" | "assistant" | "user";
  content: string;
}

// This lives in memory only—never shown directly
const SYSTEM_PROMPT = `You are a warm, engaging assistant who knows everything about Sai Dhanush Soma:
- Location: Chicago, IL
- Phone: 773-970-6599
- Email: stevesid161201@gmail.com
- LinkedIn: https://www.linkedin.com/in/ssdhanush/

(SAI DHANUSH SOMA
Chicago,IL | 773-970-6599 | stevesid161201@gmail.com | https://www.linkedin.com/in/ssdhanush/
SUMMARY
Aspiring Software Engineer with 1.5 years of software development experience, proficient in building scalable solutions and boosting performance. Passionate about problem-solving, system design, and agile methodologies. Experienced in maximizing data structures, algorithms, and modern technologies to deliver impactful software solutions. Seeking opportunities to apply technical expertise and contribute to innovative projects.
SKILLS
Languages and Frameworks: Python, Core Java, Java Servlets, Langchain, Flask, Maven, Apache Tomcat, SQL, NoSQL, Spring Boot, REST, HTML, CSS, JavaScript, ReactJS, ExpressJS, NodeJS, NextJS, TypeScript, Tailwind CSS, Data Structures and Algorithms
Tools: Eclipse, VS Code, MySQL, MongoDB, Docker, Git, Prometheus, Grafana, OpenAI API, Twilio API, Numpy, Pandas, Matplotlib, scikit-learn, Tensorflow, NTLK, Keras.
WORK EXPERIENCE
Research Intern
La Trobe University, Melbourne, Australia, Remote July 2022 - June 2023
•
Integrated Python REST APIs on Raspberry Pi devices, providing real-time data collection and Prometheus for continuous monitoring of blockchain metrics, including transaction rates, storage usage, and network health.
•
Built a centralized monitoring system with Grafana to visualize real-time statistics, network graphs, and key performance indicators, ensuring tracking of node performance with 95% uptime and real-time transaction throughput.
•
Engineered a solution to visualize blockchain and consensus processes, refining node status, latency, and network performance, resulting in a 20% boost in efficiency. Executed Taiga Kanban for task management and milestones.
Software Developer
Capgemini, Bengaluru, Karnataka, India January 2023 - June 2023
•
Developed a full-stack fitness and gym platform adopting the MERN stack (MongoDB, Express.js, React.js, Node.js) with an OTP-based authentication system via Twilio API for secure user verification.
•
Enhanced UI/UX with React.js and Tailwind CSS, deploying lazy loading and efficient rendering for a seamless experience. Collaborated in Agile teams to ensure high-quality, scalable code.
•
Capgemini-assessed project, presented and demonstrated given project to 3 Capgemini professionals.
PROJECTS
Smartnest August 2024 - December 2024
•
Built a Smart Home product management application, frontend with ReactJS and executed backend functionality with Java Servlets to enable efficient CRUD operations and product catalog management.
•
Implemented AI-driven recommendation agents utilizing LangChain and GPT-4o-mini with MySQL and MongoDB databases, refining to cut customer wait times by 75% and deliver instant responses.
•
Integrated Elasticsearch with RAG-based vector semantic search, improving retrieval accuracy by 60%. Leveraged OpenAI API for real-time LLM insights and designed a secure, role-based system for Customers, Store Managers, and Salesmen.
Credit Card Fraud Detection September 2023 - December 2023
•
Preprocessed data utilizing UMAP, PCA, and t-SNE for dimensionality reduction and applied feature selection to boost model input, by making use of Multi-Layer Perceptron Algorithm.
•
Trained and fine-tuned Random Forest and MLP Classifiers with Grid Search CV, achieving 92% accuracy and 15% reduction in false positives in credit card fraud detection, evaluated by making use of precision, recall, and confusion matrix.
EDUCATION
Illinois Institute of Technology, Chicago, IL August 2023 - May 2025
Masters of Science, 3.33/4.0
Major in Computer Science.
Presidency University, Bengaluru, Karnataka, India August 2019 - June 2023
Bachelors of Technology, 3.68/4.0
Major in Computer Science.)

If you cannot answer a question from that bio, say:
"For more details, please contact Sai Dhanush Soma at 773-970-6599 or stevesid161201@gmail.com."`;

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  // messages[0] is always the system prompt
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", content: SYSTEM_PROMPT },
    { role: "assistant", content: "👋 Hi there! I’m Sai’s AI assistant—ask me anything!" },
  ]);

  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // 1) Local “what time is it?” handler
    if (/what\s+time/i.test(input)) {
      const time = new Date().toLocaleTimeString();
      return setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `🕒 It’s currently ${time}.` },
      ]);
    }

    // 2) Otherwise, call your serverless function
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages }),
      });
      if (!response.ok) throw new Error(`Status ${response.status}`);
      const { reply } = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply.content },
      ]);
    } catch (err) {
      console.error("⮕ [Client] Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "For more details, please contact Sai Dhanush Soma at 773-970-6599 or stevesid161201@gmail.com.",
        },
      ]);
    }
  };

  // Run with `vercel dev` (not `npm start`) so /api/chat actually exists locally.
  // In production, just deploy to Vercel and it’ll wire up the function.

  return (
    <>
      {/* Chat toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 bg-sky-600 text-white p-4 rounded-full shadow-lg hover:bg-sky-700 z-50"
      >
        <CommentsIcon size={24} />
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            className="fixed bottom-24 right-6 w-80 max-h-96 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-50"
          >
            <div className="bg-sky-600 text-white p-3 font-semibold">
              Chat with Sai’s AI
            </div>

            {/* Messages (skip the system prompt) */}
            <div
              ref={scrollRef}
              className="flex-1 px-3 py-2 overflow-y-auto space-y-2"
            >
              {messages
                .filter((m) => m.role !== "system")
                .map((m, i) => (
                  <div
                    key={i}
                    className={m.role === "user" ? "text-right" : "text-left"}
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

            {/* Input */}
            <div className="flex border-t">
              <input
                className="flex-1 p-2 border-none focus:outline-none"
                placeholder="Type a message…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
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
