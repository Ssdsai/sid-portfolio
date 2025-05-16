// import React, { useRef, useState, useEffect } from "react";
// import "./App.css";
// import Home from "./main";
// import Work from "./work";
// import Landing from "./landing";
// import Experience from "./experience";
// import Contact from "./contact";
// import Chatbot from "./chatbot";
// import About from "./about";
// import TechStack from "./techstack";
// import Education from "./education";
// // import CursorParticles from "./CursorParticles";
// import { useScroll, useTransform, motion } from "framer-motion";
// import useLocoScroll from "./hooks/locoscroll";
// import { useInView } from "react-intersection-observer";

// function App() {
//   // const ref = useRef<HTMLElement>(null);
//   const containerRef = useRef(null);
//   // const { scrollYProgress } = useScroll({
//   //   target: containerRef,
//   //   offset: ["start start", "end start"],
//   // });

//   const { ref: experienceInViewRef, inView: isExperienceInView } = useInView({
//     threshold: 0.2,
//     triggerOnce: false,
//   });

//   const [startLoco, setStartLoco] = useState(false);
//   useEffect(() => {
//     setStartLoco(true);
//   }, []);
//   useLocoScroll(startLoco, containerRef);

//   return (
//     <div className="App  " ref={containerRef} data-scroll-container>

// {/* Sections NOT using Locomotive */}
// {/* <Home /> */}
//       {/* <Landing />

//       {/* Sections using Locomotive */}
//       {/* <div  ref={containerRef}>
//         <section id="about" className="mt-[80vh]">
//           <h3 className="font-brush text-[30px] text-black">Chapter 1</h3>
//           <h1 className="font-autumn text-[80px] mt-[-15px]">About</h1>
//           <About />
//         </section>

//         <section id="work" className="mt-[30vh]">
//           <h3 className="font-brush text-[30px] text-black">Chapter 2</h3>
//           <h1 className="font-autumn text-[80px] mt-[-15px]">Work</h1>
//           <Work darken={false} />
//         </section>

//         <section
//           id="experience"
//           className={`transition-colors duration-1000 ${
//             isExperienceInView ? "bg-black text-white" : "bg-white text-black"
//           } mt-[30vh]`}
//         >
//           <h3
//             className={`font-brush text-[30px] ${
//               isExperienceInView ? "text-white" : "text-black"
//             }`}
//           >
//             Chapter 3
//           </h3>
//           <h1 className="font-autumn text-[80px] mt-[-15px]">Experience</h1>
//           <Experience refProp={experienceInViewRef} />
//         </section>

//         <section id="contact">
//           <Contact />
//         </section>

//         <Chatbot />
//         </div> */} 
      
//       {/* Zooming Hero Section
//       {/* <div className="h-[50vh] relative"> */}
//       {/* <CursorParticles /> */}
//        <Home />
//       <Landing />
      
//       <section data-scroll-section>
//       <h3 className="mt-[-20vh] text-black font-brush text-[30px]" >
//             Chapter 1
//             <h1 className="font-autumn text-[80px] mt-[-15px]">About</h1>
//       </h3>
//       <div className="relative z-10 mt-[80vh]" >
//           <About />
//       </div>
//       </section>

//       <section data-scroll-section>
//       <h3 className="mt-[20vh] text-black font-brush text-[30px]" >
//         Chapter 2
//           <h1 className="font-autumn text-[80px] mt-[-15px]">Work</h1>
//       </h3>
//       <div className="relative z-10 mt-[30vh]" >
//           <Work/>
//       </div>
//       </section>

      

//       <section data-scroll-section
//         className={`transition-colors duration-1000 ${
//           isExperienceInView ? "bg-black text-white" : "bg-white text-black"
//         }`}
//       >
//         <h3 className={`mt-[30vh] text-black font-brush text-[30px] ${
//           isExperienceInView ? " text-white" : " text-black"
//         }`} >
//           Chapter 3
//             <h1 className="font-autumn text-[80px] mt-[-15px]">Experience</h1>
//         </h3>
//         <div className="relative z-10 mt-[30vh]" >
//           <Experience refProp={experienceInViewRef} />
//         </div>
//       </section>
      
//       <section data-scroll-section id="contact">
//         <Contact />
//       </section>
//       <Chatbot />
      

//       {/* <motion.div
//           className="h-screen  md:text-5xl flex items-center justify-center text-white text-5xl  text-playfair"
//           style={{
//             opacity: useTransform(scrollYProgress, [0.28, 0.3], [0, 1]), 
//             position: "sticky",
//             top: 0,
//             zIndex: 9,
//           }}
//         >
//           <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
//             <video
//               className="w-full h-full object-cover  imini:h-[70%] lg:h-[80%]"
//               src={videoBg}
//               autoPlay
//               loop
//               muted
//               playsInline
//             />
//           </div>
//           <h1 className="mt-[-100px] text-black font-abel" id="about">01. About</h1>
//         </motion.div>
//         {/* Experience section appears AFTER zoom */}
//       {/* <div className="relative z-10 mt-[-10vh]"> */}

//       {/* </div> */}

//       {/* <motion.div
//           className="h-screen  md:text-5xl flex items-center justify-center text-white text-5xl  text-playfair"
//           style={{
//             opacity: useTransform(scrollYProgress, [0.28, 0.3], [0, 1]), 
//             position: "sticky",
//             top: 0,
//             zIndex: 9,
//           }}
//         >
//           <h1 className="mt-[-100px] text-black font-abel" id="work">02. Work</h1>
//         </motion.div>
//         {/* Experience section appears AFTER zoom */}
//       {/* <div className="relative z-10 mt-[-20vh]">  */}

//       {/* </div> */}

//       {/* <motion.div
//           className="h-screen  md:text-5xl flex items-center justify-center text-white text-5xl  text-playfair"
//           style={{
//             opacity: useTransform(scrollYProgress, [0.28, 0.3], [0, 1]), 
//             position: "sticky",
//             top: 0,
//             zIndex: 9,
//           }}
//         >
//           <h1 className="mt-[-100px] text-black font-abel" id="experience">03. Experience</h1>
//         </motion.div>
//         {/* Experience section appears AFTER zoom */}
//       {/* <div className="relative z-10 mt-[-10vh]">  */}
//     </div>
//   );
// }

// export default App;

import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import Home from "./main";
import Work from "./work";
import Landing from "./landing";
import Experience from "./experience";
import Contact from "./contact";
import Chatbot from "./chatbot";
import About from "./about";
import TechStack from "./techstack";
import Education from "./education";
// import CursorParticles from "./CursorParticles";
import { useScroll, useTransform, motion } from "framer-motion";
// import useLocoScroll from "./hooks/locoscroll";
import { useInView } from "react-intersection-observer";

import guyabout from "./assets/about/about-guy.jpg";
import guywork from "./assets/about/guywork.jpg"

function App() {
  // const ref = useRef<HTMLElement>(null);
  const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end start"],
  // });

  const { ref: experienceInViewRef, inView: isExperienceInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // const [startLoco, setStartLoco] = useState(false);
  // useEffect(() => {
  //   setStartLoco(true);
  // }, []);
  // useLocoScroll(startLoco, containerRef);

  return (
    <div className="App overflow-x-hidden " ref={containerRef} data-scroll-container>
       <Home />
      <Landing />
      
      <section data-scroll-section id="about" className="">
      <h3 className="mt-[-25vh] text-black font-brush text-[30px]" >
        
            Chapter 1
            <h1 className="font-autumn text-[80px] mt-[-15px]">About</h1>
            {/* <img src={guyabout} alt="About Guy Standing" className="absolute right-6 mt-[-400px] hidden sm:block" /> */}
      </h3>
      <div className="relative z-10 mt-[80vh]" >
          <About />
      </div>
      </section>

      <section data-scroll-section id="experience-zone"
  className={`transition-colors duration-1000 ${
    isExperienceInView ? "bg-black text-white" : "bg-white text-black"
  }`}
>
  {/* Work Section */}
  <div id="work">
    <h3
      className={`mt-[20vh] font-brush text-[30px] ${
        isExperienceInView ? "text-white" : "text-black"
      }`}
    >
      Chapter 2
      <h1 className="font-autumn text-[80px] mt-[-15px]">Work</h1>
      <img src={guywork} alt="About Guy Standing" className="absolute right-6 w-10 mt-[-400px] hidden sm:block" />
    </h3>
    <div className="relative z-10 mt-[25vh]">
      <Work />
    </div>
  </div>

  {/* Experience Section */}
  <div id="experience">
    <h3
      className={`mt-[30vh] font-brush text-[30px] ${
        isExperienceInView ? "text-white" : "text-black"
      }`}
    >
      Chapter 3
      <h1 className="font-autumn text-[80px] mt-[-15px]">Education & Experience</h1>
    </h3>
    <div className="relative z-10 mt-[25vh]">
      <Experience refProp={experienceInViewRef} />
    </div>
  </div>
</section>

      
      <section data-scroll-section id="contact">
        <Contact />
      </section>
      <Chatbot />
      
    </div>
  );
}

export default App;