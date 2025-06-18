// // src/components/Chatbot.tsx
// import React, { useState, useEffect, useRef } from "react";
// import { FaComments } from "react-icons/fa";
// import type { IconBaseProps } from "react-icons";
// import { motion, AnimatePresence } from "framer-motion";

// const CommentsIcon = FaComments as React.ComponentType<IconBaseProps>;

// interface Message {
//   role: "system" | "assistant" | "user";
//   content: string;
// }

// const SYSTEM_PROMPT = `You are a warm, engaging assistant who knows everything about Sai Dhanush Soma:
// Location: Chicago, IL
// Phone: 773-970-6599
// Email: stevesid161201@gmail.com
// LinkedIn: https://www.linkedin.com/in/ssdhanush/
// Resume Summary:
// Aspiring Software Engineer with 1.5 years of software development experience, passionate about solving real-world problems and building scalable software.`;

// export default function Chatbot() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     { role: "system", content: SYSTEM_PROMPT },
//     { role: "assistant", content: "👋 Hi there! I’m Sai’s AI assistant—ask me anything!" },
//   ]);
//   const [input, setInput] = useState("");
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     scrollRef.current?.scrollTo({
//       top: scrollRef.current.scrollHeight,
//       behavior: "smooth",
//     });
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMsg: Message = { role: "user", content: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     if (/what\s+time/i.test(input)) {
//       const time = new Date().toLocaleTimeString();
//       return setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: `🕒 It’s currently ${time}.` },
//       ]);
//     }

//     try {
//       console.log("Calling backend:", `${process.env.REACT_APP_BACKEND_URL}/api/chat`);
//       const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";
//       console.log("Calling backend:", `${backendURL}/api/chat`);
//       const response = await fetch(`${backendURL}/api/chat`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ messages: [...messages, userMsg] }),
//       });

//       if (!response.ok) throw new Error(`Status ${response.status}`);
//       const { reply } = await response.json();

//       setMessages((prev) => [...prev, { role: "assistant", content: reply.content }]);
//     } catch (err) {
//       console.error("⮕ [Client] Chat error:", err);
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content:
//             "❌ Sorry, something went wrong. You can contact Sai at 773-970-6599 or stevesid161201@gmail.com.",
//         },
//       ]);
//     }
//   };

//   return (
//     <>
//       {/* Floating Chat Button */}
//       <button
//         onClick={() => setOpen((o) => !o)}
//         className="fixed bottom-6 right-6 bg-sky-600 text-white p-4 rounded-full shadow-lg hover:bg-sky-700 z-50"
//       >
//         <CommentsIcon size={24} />
//       </button>

//       {/* Chat Window */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.75 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.75 }}
//             className="fixed bottom-24 right-6 w-80 max-h-96 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-50"
//           >
//             <div className="bg-sky-600 text-white p-3 font-semibold">
//               Chat with Sai’s AI
//             </div>

//             <div ref={scrollRef} className="flex-1 px-3 py-2 overflow-y-auto space-y-2">
//               {messages
//                 .filter((m) => m.role !== "system")
//                 .map((m, i) => (
//                   <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
//                     <span
//                       className={
//                         m.role === "user"
//                           ? "inline-block bg-sky-100 text-sky-900 p-2 rounded-lg"
//                           : "inline-block bg-gray-100 text-gray-900 p-2 rounded-lg"
//                       }
//                     >
//                       {m.content}
//                     </span>
//                   </div>
//                 ))}
//             </div>

//             <div className="flex border-t">
//               <input
//                 className="flex-1 p-2 border-none focus:outline-none"
//                 placeholder="Type a message…"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               />
//               <button
//                 onClick={handleSend}
//                 className="bg-sky-600 text-white px-4 rounded-r-lg hover:bg-sky-700"
//               >
//                 Send
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }






// src/components/Chatbot.tsx
import React, { useState, useEffect, useRef } from "react";
import { FaComments } from "react-icons/fa";
import type { IconBaseProps } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";

const CommentsIcon = FaComments as React.ComponentType<IconBaseProps>;

interface Message {
  role: "system" | "assistant" | "user";
  content: string;
}

const SYSTEM_PROMPT = `You are a warm, engaging assistant who knows everything about Sai Dhanush Soma:
Location: Chicago, IL
Phone: 773-970-6599
Email: stevesid161201@gmail.com
LinkedIn: https://www.linkedin.com/in/ssdhanush/
Resume Summary:
Aspiring Software Engineer with 1.5 years of software development experience, passionate about solving real-world problems and building scalable software.`;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", content: SYSTEM_PROMPT },
    { role: "assistant", content: "👋 Hi there! I’m Sai’s AI assistant—ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    if (/what\s+time/i.test(input)) {
      const time = new Date().toLocaleTimeString();
      setMessages([...updatedMessages, { role: "assistant", content: `🕒 It’s currently ${time}.` }]);
      setLoading(false);
      return;
    }

    try {
      const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";
      const response = await fetch(`${backendURL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) throw new Error(`Status ${response.status}`);
      const { reply } = await response.json();

      setMessages((prev) => [...prev, { role: "assistant", content: reply.content }]);
    } catch (err) {
      console.error("⮕ [Client] Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "❌ Sorry, something went wrong. You can contact Sai at 773-970-6599 or stevesid161201@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 bg-sky-600 text-white p-4 rounded-full shadow-lg hover:bg-sky-700 z-50"
      >
        <CommentsIcon size={24} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            className="fixed bottom-24 right-6 w-80 max-h-96 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-50"
          >
            <div className="bg-sky-600 text-white p-3 font-semibold">Chat with Sai’s AI</div>

            <div ref={scrollRef} className="flex-1 px-3 py-2 overflow-y-auto space-y-2">
              {messages
                .filter((m) => m.role !== "system")
                .map((m, i) => (
                  <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                    <span
                      className={`inline-block p-2 rounded-lg ${
                        m.role === "user"
                          ? "bg-sky-100 text-sky-900"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      {m.content}
                    </span>
                  </div>
                ))}
              {loading && (
                <div className="text-left text-sm text-gray-500 italic">Typing...</div>
              )}
            </div>

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
                disabled={loading}
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
