// import React, { useRef, useState, useEffect } from "react";
// import { useScroll, useTransform, motion } from "framer-motion";
// import videoBg from "./assets/video/bg.mp4";
// import { TypeAnimation } from "react-type-animation";
// import sid from "./assets/port - Copy2.png";

// export default function Home() {
//   const containerRef = useRef(null);
//   // Track scroll on container
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   // Zoom in + fade out on scroll
//   const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.5]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

//   return (
//     <motion.div
//       style={{ scale, opacity }}
//       className="h-screen w-full mt-[78px] fixed top-0 left-0 flex items-center justify-center z-20"
//     >
//       <div ref={containerRef} className="  flex flex-col">
//         {/* Navigation 
//               ${
//                   scrolled ? "bg-white" : "bg-transparent
//               */}
        

//         {/* Spacer for fixed navbar height */}
//         {/* <div className="h-[150px] max-sm:h-[120px]" /> */}
//         {/* VIDEO */}
//         <div
//           className="w-full h-full fixed top-0 left-0 z-[-1] overflow-hidden
//                               max-sm:w-full max-sm:h-full max-sm:top-0 max-sm:left-0 max-sm:z-[-5] max-sm:overflow-hidden"
//         >
//           <video
//             className="w-full h-full object-cover"
//             src={videoBg}
//             autoPlay
//             loop
//             muted
//             playsInline
//           ></video>
//         </div>

//         {/* Image Section */}
//         <div className="w-full flex lg:px-[100px] lg:py-[50px]">
//           <div className="flex flex-col font-shadows text-[80px] px-20 py-20 max-w-[80rem] mt-[100px] leading-[1.2] 
//                           max-sm:max-w-[250px] max-sm:px-5 max-sm:text-[30px] max-sm:mt-[-50px]
//                           lg:max-w-[900px] lg:text-[60px] lg:mt-[50px]">
//             <h1>Merging Creativity with Code and a Touch of Intelligence</h1>
//             <div className="text-[33px] font-playfair mt-[35px] max-sm:text-[20px]
//             lg:text-[25px]">
//               <h4>- Hi there🙋🏻‍♂, I'm Sai Dhanush Soma</h4>
//               <h4>
//                 I'm &nbsp;
//                 <TypeAnimation
//                   sequence={[
//                     " Full Stack Developer",
//                     2000, // Wait for 2 seconds
//                     () => {
//                       // Callback before deleting
//                     },
//                     "", // Clear the text
//                     " Software Engineer",
//                     2000, // Wait for 2 seconds
//                     () => {
//                       // Callback before deleting
//                     },
//                     "", // Clear the text
//                     " AI/ML Enthusiast",
//                     2000, // Wait for 2 seconds
//                     () => {
//                       // Callback before deleting
//                     },
//                     "", // Clear the text
//                   ]}
//                   wrapper="span"
//                   speed={50}
//                   style={{ display: "inline-block" }}
//                   repeat={Infinity}
//                   className="text-[#04ac7c] font-bold"
//                 />
//               </h4>
//               <p className="text-[18px] ml-[55px] px-40 justify-center py-5 max-w-[1000px] flex-row
//               lg:text-[15px] lg:w-[800px] lg:text-[20px] lg:ml-[-20px]">
//                 A Software Engineer with 1.5 years of experience, dedicated to
//                 write clean, efficient, maintainable code and integrating
//                 AI-driven solutions.
//               </p>
//               <a
//   href="https://drive.google.com/file/d/1eBBFiSKcePMEkhv6qiqRXKvMDnDUBw8L/view?usp=sharing"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="inline-block mt-2 w-fit text-center border border-black rounded-lg px-6 py-2 font-playfair text-sm sm:text-base md:text-lg transition-all duration-200 hover:bg-gray-800 hover:text-white"
// >
//   Resume
// </a>

//             </div>
//           </div>

//           <img
//             src={sid}
//             alt="Sid's portfolio"
//             className="  py-1 px-12  w-[730px] max-sm:w-[300px] h-auto object-contain 
//             lg:w-[570px] [1080]:w-[730px]" /*max-sm:justify-center max-sm:items-center max-sm:px-4 */
//           />
//         </div>

//         {/* Work Experience*/}

//         {/* <Spline className="p-4 w-[20%] h-[20%] shadow-lg" scene="https://prod.spline.design/cQBHcW-AdrRvh6AS/scene.splinecode" /> */}
//       </div>
//     </motion.div>
//   );
// }

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import videoBg from "./assets/video/bg.mp4";
import { TypeAnimation } from "react-type-animation";
import sid from "./assets/port - Copy2.png";

export default function Home() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", isMobile ? "end end" : "end start"],
  });

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [1, isMobile ? 1.1 : 1.25]),
    {
      stiffness: 100,
      damping: 20,
    }
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [1, 0]),
    {
      stiffness: 100,
      damping: 20,
    }
  );

  return (
    <div ref={containerRef} className="relative z-20 w-full min-h-screen overflow-x-hidden">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Zoomable Content */}
      <motion.div
        style={{ scale, opacity, transformOrigin: "center" }}
        className="w-full"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-[100px] py-16 lg:py-[60px]">
          {/* Text Section */}
          <div className="flex flex-col text-black font-shadows text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] leading-tight max-w-[95%] lg:max-w-[55%] max-sm:mt-[65px] lg:mt-[120px] md:mt-[100px]">
            <h1>Merging Creativity with Code and a Touch of Intelligence</h1>
            <div className="text-[18px] sm:text-[22px] md:text-[25px] font-playfair mt-6">
              <h4>- Hi there🙋🏻‍♂, I'm Sai Dhanush Soma</h4>
              <h4>
                I'm&nbsp;
                <TypeAnimation
                  sequence={[
                    " Full Stack Developer",
                    2000,
                    "",
                    " Software Engineer",
                    2000,
                    "",
                    " AI/ML Enthusiast",
                    2000,
                    "",
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-[#04ac7c] font-bold"
                />
              </h4>
              <p className="mt-5 text-sm sm:text-base md:text-lg lg:text-xl text-black max-w-[90%]">
                A Software Engineer with 1.5 years of experience, dedicated to writing clean,
                efficient, maintainable code and integrating AI-driven solutions.
              </p>
              <a
                href="https://drive.google.com/file/d/1eBBFiSKcePMEkhv6qiqRXKvMDnDUBw8L/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 w-fit border border-black rounded-lg px-6 py-2 font-playfair text-sm sm:text-base md:text-lg text-black hover:bg-gray-800 hover:text-white transition-all duration-200"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-10 lg:mt-[80px] lg:ml-20">
            <img
              src={sid}
              alt="Sid's portfolio"
              className="object-contain w-[240px] sm:w-[300px] md:w-[400px] lg:w-[800px] xl:w-[570px] 2xl:w-[650px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
