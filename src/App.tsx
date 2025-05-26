import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import Home from "./main";
import Work from "./work";
import Landing from "./landing";
import Experience from "./experience";
import Contact from "./contact";
import Chatbot from "./chatbot";
import About from "./about";
import { useScroll, useTransform, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import guyabout from "./assets/about/about-guy.jpg";
import guyabout1 from "./assets/about/guyabout1.mp4";
import guywork from "./assets/projects/guywork.jpg";
import guywork1 from "./assets/projects/guywork1.mp4";
import education from "./assets/experience/education.mp4";
import experience from "./assets/experience/experience.mp4";
// import guywork1 from "./assets/projects/work.gif";

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

  return (
    <div className="App overflow-x-hidden " ref={containerRef} data-scroll-container>
       <Home />
      <Landing />
      
      {/* <section data-scroll-section id="about" className="">
      <h3 className="mt-[-60vh] lg:mt-[-20vh] text-black font-brush text-[30px]" >
        
            Chapter 1
            <h1 className="font-autumn text-[80px] mt-[-15px]">About</h1>
            <img src={guyabout} alt="About Guy Standing" className="absolute right-6 mt-[-400px] hidden lg:block" />
            <video
              className="w-[40%] h-[65%] object-cover z-10 absolute left-0 mt-[-300px] hidden lg:block"
              src={guyabout1}
              autoPlay
              loop
              muted
              playsInline
            />
      </h3>
      <div className="relative z-10  xl:mt-[90vh] max-sm:mt-[30vh]" >
          <About />
      </div>
      </section> */}


        {/* <section data-scroll-section id="about" className="relative py-[20vh]">
          <div className="mt-[-60vh] lg:mt-[-50vh]  z-10 text-black text-center font-brush text-[30px]">
            <p>Chapter 1</p>
            <h1 className="font-autumn text-[60px] sm:text-[80px] mt-2">About</h1>

              <img
                src={guyabout}
                alt="About Guy Standing"
                className="absolute lg:right-6 lg:top-[10%] hidden md:block lg:mt-[-80vh] md:left-8 md:w-[30%] md:mt-[-67vh]"
              />
              <video
                className="lg:w-[40%] lg:h-[35%] object-cover lg:z-10 absolute lg:left-4 lg:top-[20%] lg:mt-[-95vh] hidden md:block md:w-[25%] md:h-[19%] md:left-8 md:mt-[-85vh]"
                src={guyabout1}
                autoPlay
                loop
                muted
                playsInline
              />
          </div>

          <div className="relative z-10 mt-[40vh] lg:mt-[120vh] max-sm:mt-[30vh] md:mt-[25vh]">
            <About />
          </div>
      </section> */}

      {/* <section data-scroll-section id="about" className="relative py-[20vh]">
          
          <div className="mt-[-60vh] lg:mt-[-50vh]  z-10 text-black text-center font-brush text-[30px]">
            <p>Chapter 1</p>
            <h1 className="font-autumn text-[60px] sm:text-[80px] mt-2">About</h1>

            
              <img
                src={guyabout}
                alt="About Guy Standing"
                className="absolute right-6 top-[10%] hidden lg:block mt-[-80vh]"
              />
              <video
                className="w-[40%] h-[35%] object-cover z-10 border border-black absolute left-4 top-[20%] mt-[-100vh] hidden lg:block"
                src={guyabout1}
                autoPlay
                loop
                muted
                playsInline
              />
          </div>

          
          <div className="relative z-10 mt-[40vh] md:mt-[30vh] lg:mt-[120vh] max-sm:mt-[30vh]">
            <About />
          </div>
      </section> */}

      <section data-scroll-section id="about" className="relative py-[10vh] px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10 mt-[-70vh]">

          {/* Video - Left */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <video
              className="w-[160%] h-auto object-cover z-10 mt-[10vh] hidden md:block"
              src={guyabout1}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Heading - Center */}
          <div className="w-full lg:w-1/3 text-center font-brush text-[30px]">
            <p>Chapter 1</p>
            <h1 className="font-autumn text-[60px] sm:text-[80px] mt-2">About</h1>
          </div>

          {/* Image - Right */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={guyabout}
              alt="About Guy Standing"
              className="w-[80%] h-auto object-contain hidden md:block"
            />
          </div>
        </div>

        {/* About Component Below */}
        <div className="relative z-10 mt-[10vh] max-sm:mt-[25vh] md:mt-[25vh] lg:mt-[80vh] xl:mt-[65vh]">
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
            className={`mt-[15vh] lg:mt-[30vh] font-brush text-[30px] ${
              isExperienceInView ? "text-white" : "text-black"
            }`}
          >
            Chapter 2
            <h1 className="font-autumn text-[80px] mt-[-15px]">Work</h1>
            <img src={guywork} alt="About Guy Standing" className="absolute left-6 w-1/3 mt-[-300px] hidden md:block" />
            <video
              className="w-[40%] h-auto object-cover z-10 absolute right-0 lg:mt-[-200px] md:mt-[-80px] hidden md:block"
              src={guywork1}
              autoPlay
              loop
              muted
              playsInline
                  />
          </h3>
          <div className="relative z-10 mt-[22vh]">
            <Work />
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience">
          <h3
            className={`mt-[15vh] lg:mt-[30vh] font-brush text-[30px] ${
              isExperienceInView ? "text-white" : "text-black"
            }`}
          >
            Chapter 3
            <h1 className="font-autumn text-[80px] mt-[-15px]">Education & Experience</h1>
            {/* Education Video (Left Side) */}
          <div className="absolute left-6 mt-[-400px] hidden sm:block z-10 lg:w-[25%] md:w-[30%] md:mt-[-370px] aspect-square rounded-full overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src={education}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Experience Video (Right Side) */}
          <div className="absolute right-6 mt-[-60px] hidden sm:block z-10 lg:w-[25%] md:w-[30%] md:mt-[-30px] aspect-square rounded-full overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src={experience}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          </h3>
          <div className="relative z-10 mt-[12vh] lg:mt-[32vh]">
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