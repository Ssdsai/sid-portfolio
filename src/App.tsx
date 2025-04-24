import React, { useRef } from "react";
import "./App.css";
import Home from "./main";
import Work from "./work";
import Landing from "./landing";
import Experience from "./experience";
import Contact from "./contact";
import Chatbot from "./chatbot";
import About from "./about";
// import CursorParticles from "./CursorParticles";
import { useScroll, useTransform, motion } from "framer-motion";

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  

  return (
    <div className="App  " ref={containerRef}>
      {/* Zooming Hero Section */}
      <div className="h-[50vh] relative">
        {/* <CursorParticles /> */}
        <Home />
        <Landing />
        
        

        <motion.div
          className="h-screen  md:text-5xl flex items-center justify-center text-white text-5xl  text-playfair"
          style={{
            opacity: useTransform(scrollYProgress, [0.28, 0.3], [0, 1]), 
            position: "sticky",
            top: 0,
            zIndex: 9,
          }}
        >
          <h1 className="mt-[-100px] text-black font-abel">01. About</h1>
        </motion.div>
        {/* Experience section appears AFTER zoom */}
        <div className="relative z-10 mt-[-10vh]">
          
          <About />
        </div>



        <motion.div
          className="h-screen  md:text-5xl flex items-center justify-center text-white text-5xl  text-playfair"
          style={{
            opacity: useTransform(scrollYProgress, [0.28, 0.3], [0, 1]), 
            position: "sticky",
            top: 0,
            zIndex: 9,
          }}
        >
          <h1 className="mt-[-100px] text-black font-abel">02. Work</h1>
        </motion.div>
        {/* Experience section appears AFTER zoom */}
        <div className="relative z-10 mt-[-20vh]">
          
          <Work />
        </div>

        <motion.div
          className="h-screen  md:text-5xl flex items-center justify-center text-white text-5xl  text-playfair"
          style={{
            opacity: useTransform(scrollYProgress, [0.28, 0.3], [0, 1]), 
            position: "sticky",
            top: 0,
            zIndex: 9,
          }}
        >
          <h1 className="mt-[-100px] text-black font-abel">03. Experience</h1>
        </motion.div>
        {/* Experience section appears AFTER zoom */}
        <div className="relative z-10 mt-[-10vh]">
          <Experience />
          <Contact />
          <Chatbot />
        </div>

      </div>
    </div>
  );
}

export default App;
