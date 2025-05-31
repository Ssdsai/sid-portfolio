// import React, { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface Props {
//   onComplete: () => void;
// }

// const IntroAnimation: React.FC<Props> = ({ onComplete }) => {
//   useEffect(() => {
//     const timer = setTimeout(onComplete, 4000); // 4s animation
//     return () => clearTimeout(timer);
//   }, [onComplete]);

//   return (
//     <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
//       <div className="text-white text-4xl sm:text-6xl font-bold font-mono relative text-center">
//         <motion.div
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="relative"
//         >
//           <motion.div
//             initial={{ x: 0 }}
//             animate={{ x: -30 }}
//             transition={{ duration: 1 }}
//             className="inline-block"
//           >
//             S
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 1, duration: 0.5 }}
//             className="inline-block"
//           >
//             A
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.5 }}
//             className="inline-block"
//           >
//             I
//           </motion.div>
//           &nbsp;
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 2 }}
//             className="inline-block"
//           >
//             D
//           </motion.span>
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 2 }}
//           >
//             HANUSH
//           </motion.span>
//           <br />
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 2.5 }}
//             className="mt-2"
//           >
//             SOMA
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default IntroAnimation;


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  onComplete: () => void;
}

const IntroAnimation: React.FC<Props> = ({ onComplete }) => {
  const [stage, setStage] = useState<"sid" | "full">("sid");

  useEffect(() => {
    const stageTimer = setTimeout(() => setStage("full"), 1500);
    const exitTimer = setTimeout(onComplete, 4500);
    return () => {
      clearTimeout(stageTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  const AnimatedLetter = ({
    letter,
    delay = 0,
  }: {
    letter: string;
    delay?: number;
  }) => (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      layout
    >
      {letter}
    </motion.span>
  );

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999] px-4">
      <motion.div
        className="text-white text-5xl sm:text-7xl font-bold font-shadows whitespace-nowrap"
        style={{ userSelect: "none", display: "flex", gap: "0.75ch" }}
        layout
      >
        {/* S */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          layout
        >
          S
        </motion.span>

        {/* A appears between S and I only in full stage */}
        {stage === "full" && <AnimatedLetter letter="A" delay={0.1} />}

        {/* I */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          layout
        >
          I
        </motion.span>

        {/* space appears *only* in full stage */}
        {stage === "full" && <motion.span style={{ width: "0.5ch" }} layout />}

        {/* D */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          layout
        >
          D
        </motion.span>

        {/* HANUSH appears after D in full stage */}
        {stage === "full" &&
          ["H", "A", "N", "U", "S", "H"].map((ch, i) => (
            <AnimatedLetter key={`h-${i}`} letter={ch} delay={0.5 + i * 0.1} />
          ))}

        {/* space after HANUSH */}
        {stage === "full" && <motion.span style={{ width: "0.5ch" }} layout />}

        {/* SOMA appears at end */}
        {stage === "full" &&
          ["S", "O", "M", "A"].map((ch, i) => (
            <AnimatedLetter key={`soma-${i}`} letter={ch} delay={1.2 + i * 0.1} />
          ))}
      </motion.div>
    </div>
  );
};

export default IntroAnimation;

