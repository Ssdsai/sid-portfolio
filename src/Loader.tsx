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
    const stageTimer = setTimeout(() => setStage("full"), 1500); // after 1.5s move to stage 2
    const exitTimer = setTimeout(onComplete, 4500); // complete after total 4.5s
    return () => {
      clearTimeout(stageTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999] px-4">
      {/* Wrapper for layout shift animation */}
      <motion.div
        className="text-white text-5xl sm:text-7xl font-bold font-shadows whitespace-nowrap"
        style={{ userSelect: "none", display: "flex", gap: "0.75ch" }}
        layout // important for layout transition
      >
        {stage === "sid" ? (
          <>
            {/* S */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              layout
            >
              S
            </motion.span>
            {/* I */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              layout
            >
              I
            </motion.span>
            {/* D */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              layout
            >
              D
            </motion.span>
          </>
        ) : (
          <>
            {/* SAI */}
            <motion.span layout>S</motion.span>
            <motion.span layout>A</motion.span>
            <motion.span layout>I</motion.span>

            {/* space */}
            <motion.span style={{ width: "0.5ch" }} />

            {/* DHANUSH */}
            <motion.span layout>D</motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              layout
            >
              HANUSH
            </motion.span>

            {/* space */}
            <motion.span style={{ width: "0.5ch" }} />

            {/* SOMA */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              layout
            >
              SOMA
            </motion.span>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default IntroAnimation;
