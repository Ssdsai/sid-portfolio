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


// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// interface Props {
//   onComplete: () => void;
// }

// const IntroAnimation: React.FC<Props> = ({ onComplete }) => {
//   const [stage, setStage] = useState<"sid" | "full">("sid");

//   useEffect(() => {
//     const stageTimer = setTimeout(() => setStage("full"), 1500);
//     const exitTimer = setTimeout(onComplete, 4500);
//     return () => {
//       clearTimeout(stageTimer);
//       clearTimeout(exitTimer);
//     };
//   }, [onComplete]);

//   const AnimatedLetter = ({
//     letter,
//     delay = 0,
//   }: {
//     letter: string;
//     delay?: number;
//   }) => (
//     <motion.span
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       layout
//     >
//       {letter}
//     </motion.span>
//   );

//   return (
//     <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999] px-4">
//       <motion.div
//         className="text-white text-5xl sm:text-7xl font-bold font-shadows whitespace-nowrap"
//         style={{ userSelect: "none", display: "flex", gap: "0.75ch" }}
//         layout
//       >
//         {/* S */}
//         <motion.span
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0 }}
//           layout
//         >
//           S
//         </motion.span>

//         {/* A appears between S and I only in full stage */}
//         {stage === "full" && <AnimatedLetter letter="A" delay={0.1} />}

//         {/* I */}
//         <motion.span
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           layout
//         >
//           I
//         </motion.span>

//         {/* space appears *only* in full stage */}
//         {stage === "full" && <motion.span style={{ width: "0.5ch" }} layout />}

//         {/* D */}
//         <motion.span
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           layout
//         >
//           D
//         </motion.span>

//         {/* HANUSH appears after D in full stage */}
//         {stage === "full" &&
//           ["H", "A", "N", "U", "S", "H"].map((ch, i) => (
//             <AnimatedLetter key={`h-${i}`} letter={ch} delay={0.5 + i * 0.1} />
//           ))}

//         {/* space after HANUSH */}
//         {stage === "full" && <motion.span style={{ width: "0.5ch" }} layout />}

//         {/* SOMA appears at end */}
//         {stage === "full" &&
//           ["S", "O", "M", "A"].map((ch, i) => (
//             <AnimatedLetter key={`soma-${i}`} letter={ch} delay={1.2 + i * 0.1} />
//           ))}
//       </motion.div>
//     </div>
//   );
// };

// export default IntroAnimation;






// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// interface Props {
//   onComplete: () => void;
// }

// const IntroAnimation: React.FC<Props> = ({ onComplete }) => {
//   const [stage, setStage] = useState<"sid" | "full">("sid");

//   useEffect(() => {
//     const stageTimer = setTimeout(() => setStage("full"), 1500);
//     const exitTimer = setTimeout(onComplete, 4500);
//     return () => {
//       clearTimeout(stageTimer);
//       clearTimeout(exitTimer);
//     };
//   }, [onComplete]);

//   const AnimatedLetter = ({
//     letter,
//     delay = 0,
//   }: {
//     letter: string;
//     delay?: number;
//   }) => (
//     <motion.span
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       layout
//     >
//       {letter}
//     </motion.span>
//   );

//   return (
//     <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999] px-4">
//       <motion.div
//         className={`
//           text-white text-5xl sm:text-6xl md:text-7xl font-bold font-shadows
//           flex items-center justify-center
//           ${stage === "full" ? "flex-col lg:flex-row gap-4 lg:gap-[3ch]" : "flex-row gap-[0.75ch]"}
//         `}
//         style={{ userSelect: "none" }}
//         layout
//       >
//         {/* Phase 1: SID */}
//         {stage === "sid" && (
//           <>
//             <AnimatedLetter letter="S" delay={0} />
//             <AnimatedLetter letter="I" delay={0.2} />
//             <AnimatedLetter letter="D" delay={0.4} />
//           </>
//         )}

//         {/* Phase 2: Full Animation */}
//         {stage === "full" && (
//           <>
//             {/* Word: SAI */}
//             <div className="flex flex-row gap-[0.75ch]">
//               <AnimatedLetter letter="S" delay={0} />
//               <AnimatedLetter letter="A" delay={0.1} />
//               <AnimatedLetter letter="I" delay={0.2} />
//             </div>

//             {/* Word: DHANUSH */}
//             <div className="flex flex-row gap-[0.75ch]">
//               {["D", "H", "A", "N", "U", "S", "H"].map((ch, i) => (
//                 <AnimatedLetter key={`dhanush-${i}`} letter={ch} delay={0.3 + i * 0.1} />
//               ))}
//             </div>

//             {/* Word: SOMA */}
//             <div className="flex flex-row gap-[0.75ch]">
//               {["S", "O", "M", "A"].map((ch, i) => (
//                 <AnimatedLetter key={`soma-${i}`} letter={ch} delay={1.1 + i * 0.1} />
//               ))}
//             </div>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default IntroAnimation;



// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// interface Props {
//   onComplete: () => void;
// }

// const IntroAnimation: React.FC<Props> = ({ onComplete }) => {
//   const [stage, setStage] = useState<"sid" | "full">("sid");

//   useEffect(() => {
//     const stageTimer = setTimeout(() => setStage("full"), 1500);
//     const exitTimer = setTimeout(onComplete, 4500);
//     return () => {
//       clearTimeout(stageTimer);
//       clearTimeout(exitTimer);
//     };
//   }, [onComplete]);

//   const AnimatedLetter = ({
//     letter,
//     delay = 0,
//     className = "",
//   }: {
//     letter: string;
//     delay?: number;
//     className?: string;
//   }) => (
//     <motion.span
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       layout
//       className={className}
//     >
//       {letter}
//     </motion.span>
//   );

//   return (
//     <div className="fixed inset-0 bg-black z-[9999] px-4">
//       {/* For lg and above */}
//       <div className="hidden lg:flex items-center justify-center h-full md:mt-[-550px] lg:mt-0">
//         <motion.div
//           className="text-white text-5xl sm:text-6xl md:text-7xl font-bold font-shadows whitespace-nowrap flex gap-[0.75ch]"
//           style={{ userSelect: "none" }}
//           layout
//         >
//           {/* Phase 1: SID */}
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0 }}
//             layout
//           >
//             S
//           </motion.span>
//           {stage === "full" && <AnimatedLetter letter="A" delay={0.1} />}
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             layout
//           >
//             I
//           </motion.span>
//           {stage === "full" && <motion.span style={{ width: "0.5ch" }} layout />}
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             layout
//           >
//             D
//           </motion.span>
//           {stage === "full" &&
//             ["H", "A", "N", "U", "S", "H"].map((ch, i) => (
//               <AnimatedLetter key={`h-${i}`} letter={ch} delay={0.5 + i * 0.1} />
//             ))}
//           {stage === "full" && <motion.span style={{ width: "0.5ch" }} layout />}
//           {stage === "full" &&
//             ["S", "O", "M", "A"].map((ch, i) => (
//               <AnimatedLetter key={`soma-${i}`} letter={ch} delay={1.2 + i * 0.1} />
//             ))}
//         </motion.div>
//       </div>

//       {/* For sm and md devices */}
//       <div
//         className={`
//           flex lg:hidden flex-col items-center justify-center text-white 
//           text-5xl sm:text-6xl md:text-7xl font-bold font-shadows h-full
//           ${stage === "full" ? "gap-6 md:pt-16" : "gap-4"}
//         `}
//         style={{ userSelect: "none" }}
//       >
//         {stage === "sid" && (
//           <div className="flex flex-row gap-[0.75ch]">
//             <AnimatedLetter letter="S" delay={0} />
//             <AnimatedLetter letter="I" delay={0.2} />
//             <AnimatedLetter letter="D" delay={0.4} />
//           </div>
//         )}

//         {stage === "full" && (
//           <>
//             {/* SAI (S and I move slightly up, A appears between) */}
//             <div className="flex flex-row gap-[0.75ch] -translate-y-2">
//               <AnimatedLetter letter="S" delay={0} />
//               <AnimatedLetter letter="A" delay={0.1} />
//               <AnimatedLetter letter="I" delay={0.2} />
//             </div>

//             {/* DHANUSH block: D moves down-left, HANUSH appears next to it */}
//             <div className="flex flex-row gap-[0.25ch]">
//               <AnimatedLetter letter="D" delay={0.3} />
//               {["H", "A", "N", "U", "S", "H"].map((ch, i) => (
//                 <AnimatedLetter key={`dhanush-${i}`} letter={ch} delay={0.4 + i * 0.1} />
//               ))}
//             </div>

//             {/* SOMA block below */}
//             <div className="flex flex-row gap-[0.75ch]">
//               {["S", "O", "M", "A"].map((ch, i) => (
//                 <AnimatedLetter key={`soma-${i}`} letter={ch} delay={1.1 + i * 0.1} />
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IntroAnimation;




// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// interface Props {
//   onComplete: () => void;
// }

// const IntroAnimation: React.FC<Props> = ({ onComplete }) => {
//   const [stage, setStage] = useState<"sid" | "full">("sid");

//   useEffect(() => {
//     const stageTimer = setTimeout(() => setStage("full"), 1500);
//     const exitTimer = setTimeout(onComplete, 4500);
//     return () => {
//       clearTimeout(stageTimer);
//       clearTimeout(exitTimer);
//     };
//   }, [onComplete]);

//   const AnimatedLetter = ({
//     letter,
//     delay = 0,
//     className = "",
//   }: {
//     letter: string;
//     delay?: number;
//     className?: string;
//   }) => (
//     <motion.span
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       layout
//       className={className}
//     >
//       {letter}
//     </motion.span>
//   );

//   return (
//     <div className="fixed inset-0 bg-black z-[9999] px-4">
//       {/* For lg and above */}
//       <div className="hidden lg:flex items-center justify-center h-full md:mt-[-250px] max-sm:mt-[-75px] lg:mt-0">
//         <motion.div
//           className="text-white text-5xl sm:text-6xl md:text-7xl font-bold font-shadows whitespace-nowrap flex gap-[0.75ch]"
//           style={{ userSelect: "none" }}
//           layout
//         >
//           {/* Phase 1: SID */}
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0 }}
//             layout
//           >
//             S
//           </motion.span>
//           {stage === "full" && <AnimatedLetter letter="A" delay={0.1} />}
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             layout
//           >
//             I
//           </motion.span>
//           {stage === "full" && <motion.span style={{ width: "0.5ch" }} layout />}
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             layout
//           >
//             D
//           </motion.span>
//           {stage === "full" &&
//             ["H", "A", "N", "U", "S", "H"].map((ch, i) => (
//               <AnimatedLetter key={`h-${i}`} letter={ch} delay={0.5 + i * 0.1} />
//             ))}
//           {stage === "full" && <motion.span style={{ width: "0.5ch" }} layout />}
//           {stage === "full" &&
//             ["S", "O", "M", "A"].map((ch, i) => (
//               <AnimatedLetter key={`soma-${i}`} letter={ch} delay={1.2 + i * 0.1} />
//             ))}
//         </motion.div>
//       </div>

//       {/* For sm and md devices */}
//       <div className="lg:hidden flex items-center justify-center h-full md:mt-[-250px] max-sm:mt-[-75px] lg:mt-0">
//         <div
//           className={`
//             flex flex-col items-center justify-center text-white 
//             text-5xl sm:text-6xl md:text-7xl font-bold font-shadows
//             ${stage === "full" ? "gap-6" : "gap-4"}
//           `}
//           style={{ userSelect: "none" }}
//         >
//           {stage === "sid" && (
//             <div className="flex flex-row gap-[0.75ch]">
//               <AnimatedLetter letter="S" delay={0} />
//               <AnimatedLetter letter="I" delay={0.2} />
//               <AnimatedLetter letter="D" delay={0.4} />
//             </div>
//           )}

//           {stage === "full" && (
//             <>
//               {/* SAI (S and I move slightly up, A appears between) */}
//               <div className="flex flex-row gap-[0.75ch] -translate-y-2">
//                 <AnimatedLetter letter="S" delay={0} />
//                 <AnimatedLetter letter="A" delay={0.1} />
//                 <AnimatedLetter letter="I" delay={0.2} />
//               </div>

//               {/* DHANUSH block */}
//               <div className="flex flex-row gap-[0.25ch]">
//                 <AnimatedLetter letter="D" delay={0.3} />
//                 {["H", "A", "N", "U", "S", "H"].map((ch, i) => (
//                   <AnimatedLetter key={`dhanush-${i}`} letter={ch} delay={0.4 + i * 0.1} />
//                 ))}
//               </div>

//               {/* SOMA block */}
//               <div className="flex flex-row gap-[0.75ch]">
//                 {["S", "O", "M", "A"].map((ch, i) => (
//                   <AnimatedLetter key={`soma-${i}`} letter={ch} delay={1.1 + i * 0.1} />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntroAnimation;


import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onComplete: () => void;
}

const IntroAnimation: React.FC<Props> = ({ onComplete }) => {
  const [stage, setStage] = useState<"sid" | "full">("sid");
  const [show, setShow] = useState(true);

  useEffect(() => {
    const stageTimer = setTimeout(() => setStage("full"), 1500);
    const exitTimer = setTimeout(() => setShow(false), 4500); // Trigger exit animation
    return () => {
      clearTimeout(stageTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  // When exit animation is done
  const handleExitComplete = () => {
    onComplete();
  };

  const AnimatedLetter = ({
    letter,
    delay = 0,
    className = "",
  }: {
    letter: string;
    delay?: number;
    className?: string;
  }) => (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      layout
      className={className}
    >
      {letter}
    </motion.span>
  );

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black z-[9999] px-4 overflow-hidden"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            borderBottomLeftRadius: "100%",
            borderBottomRightRadius: "100%",
            transition: { duration: 1, ease: "easeInOut" },
          }}
          style={{ userSelect: "none" }}
        >
          {/* Large Screens */}
          <div className="hidden lg:flex items-center justify-center h-full">
            <motion.div
              className="text-white text-5xl sm:text-6xl md:text-7xl font-bold font-shadows whitespace-nowrap flex gap-[0.75ch]"
              layout
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                S
              </motion.span>
              {stage === "full" && <AnimatedLetter letter="A" delay={0.1} />}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I
              </motion.span>
              {stage === "full" && <motion.span style={{ width: "0.5ch" }} />}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                D
              </motion.span>
              {stage === "full" &&
                ["H", "A", "N", "U", "S", "H"].map((ch, i) => (
                  <AnimatedLetter key={`h-${i}`} letter={ch} delay={0.5 + i * 0.1} />
                ))}
              {stage === "full" && <motion.span style={{ width: "0.5ch" }} />}
              {stage === "full" &&
                ["S", "O", "M", "A"].map((ch, i) => (
                  <AnimatedLetter key={`soma-${i}`} letter={ch} delay={1.2 + i * 0.1} />
                ))}
            </motion.div>
          </div>

          {/* Small and Medium Screens */}
          <div className="lg:hidden flex items-center justify-center h-full">
            <div
              className={`
                flex flex-col items-center justify-center text-white 
                text-5xl sm:text-6xl md:text-7xl font-bold font-shadows
                ${stage === "full" ? "gap-6" : "gap-4"}
              `}
            >
              {stage === "sid" && (
                <div className="flex flex-row gap-[0.75ch]">
                  <AnimatedLetter letter="S" delay={0} />
                  <AnimatedLetter letter="I" delay={0.2} />
                  <AnimatedLetter letter="D" delay={0.4} />
                </div>
              )}

              {stage === "full" && (
                <>
                  <div className="flex flex-row gap-[0.75ch] -translate-y-2">
                    <AnimatedLetter letter="S" delay={0} />
                    <AnimatedLetter letter="A" delay={0.1} />
                    <AnimatedLetter letter="I" delay={0.2} />
                  </div>

                  <div className="flex flex-row gap-[0.25ch]">
                    <AnimatedLetter letter="D" delay={0.3} />
                    {["H", "A", "N", "U", "S", "H"].map((ch, i) => (
                      <AnimatedLetter key={`dhanush-${i}`} letter={ch} delay={0.4 + i * 0.1} />
                    ))}
                  </div>

                  <div className="flex flex-row gap-[0.75ch]">
                    {["S", "O", "M", "A"].map((ch, i) => (
                      <AnimatedLetter key={`soma-${i}`} letter={ch} delay={1.1 + i * 0.1} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;



// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// interface Props {
//   onComplete: () => void;
// }

// const IntroAnimation: React.FC<Props> = ({ onComplete }) => {
//   const [stage, setStage] = useState<"sid" | "full">("sid");

//   useEffect(() => {
//     const stageTimer = setTimeout(() => setStage("full"), 1500);
//     const exitTimer = setTimeout(onComplete, 4500);
//     return () => {
//       clearTimeout(stageTimer);
//       clearTimeout(exitTimer);
//     };
//   }, [onComplete]);

//   const AnimatedLetter = ({
//     letter,
//     delay = 0,
//     className = "",
//   }: {
//     letter: string;
//     delay?: number;
//     className?: string;
//   }) => (
//     <motion.span
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       layout
//       className={className}
//     >
//       {letter}
//     </motion.span>
//   );

//   return (
//     <div className="fixed inset-0 bg-black z-[9999] px-4">
//       {/* For lg and above */}
//       <div className="hidden lg:flex items-center justify-center h-full md:mt-[-250px] max-sm:mt-[-75px] lg:mt-0">
//         <motion.div
//           className="text-white text-5xl sm:text-6xl md:text-7xl font-bold font-shadows whitespace-nowrap flex gap-[0.75ch]"
//           style={{ userSelect: "none" }}
//           layout
//         >
//           {/* Phase 1: SID */}
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0 }}
//             layout
//           >
//             S
//           </motion.span>
//           {stage === "full" && <AnimatedLetter letter="A" delay={0.1} />}
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             layout
//           >
//             I
//           </motion.span>
//           {stage === "full" && <motion.span style={{ width: "0.5ch" }} layout />}
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             layout
//           >
//             D
//           </motion.span>
//           {stage === "full" &&
//             ["H", "A", "N", "U", "S", "H"].map((ch, i) => (
//               <AnimatedLetter key={`h-${i}`} letter={ch} delay={0.5 + i * 0.1} />
//             ))}
//           {stage === "full" && <motion.span style={{ width: "0.5ch" }} layout />}
//           {stage === "full" &&
//             ["S", "O", "M", "A"].map((ch, i) => (
//               <AnimatedLetter key={`soma-${i}`} letter={ch} delay={1.2 + i * 0.1} />
//             ))}
//         </motion.div>
//       </div>

//       {/* For sm and md devices */}
//       <div className="lg:hidden flex items-center justify-center h-full md:mt-[-250px] max-sm:mt-[-75px] lg:mt-0">
//         <div
//           className={`
//             flex flex-col items-center justify-center text-white 
//             text-5xl sm:text-6xl md:text-7xl font-bold font-shadows
//             ${stage === "full" ? "gap-6" : "gap-4"}
//           `}
//           style={{ userSelect: "none" }}
//         >
//           {stage === "sid" && (
//             <div className="flex flex-row gap-[0.75ch]">
//               <AnimatedLetter letter="S" delay={0} />
//               <AnimatedLetter letter="I" delay={0.2} />
//               <AnimatedLetter letter="D" delay={0.4} />
//             </div>
//           )}

//           {stage === "full" && (
//             <>
//               {/* SAI (S and I move slightly up, A appears between) */}
//               <div className="flex flex-row gap-[0.75ch] -translate-y-2">
//                 <AnimatedLetter letter="S" delay={0} />
//                 <AnimatedLetter letter="A" delay={0.1} />
//                 <AnimatedLetter letter="I" delay={0.2} />
//               </div>

//               {/* DHANUSH block */}
//               <div className="flex flex-row gap-[0.25ch]">
//                 <AnimatedLetter letter="D" delay={0.3} />
//                 {["H", "A", "N", "U", "S", "H"].map((ch, i) => (
//                   <AnimatedLetter key={`dhanush-${i}`} letter={ch} delay={0.4 + i * 0.1} />
//                 ))}
//               </div>

//               {/* SOMA block */}
//               <div className="flex flex-row gap-[0.75ch]">
//                 {["S", "O", "M", "A"].map((ch, i) => (
//                   <AnimatedLetter key={`soma-${i}`} letter={ch} delay={1.1 + i * 0.1} />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntroAnimation;