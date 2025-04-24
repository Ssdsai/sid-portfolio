import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import videoBg from "./assets/video/bg.mp4";
import { TypeAnimation } from "react-type-animation";
import sid from "./assets/port - Copy2.png";

export default function Home() {
  const containerRef = useRef(null);
  // Track scroll on container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Zoom in + fade out on scroll
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <motion.div
      style={{ scale, opacity }}
      className="h-screen w-full mt-[78px] fixed top-0 left-0 flex items-center justify-center pointer-events-none z-20"
    >
      <div ref={containerRef} className="  flex flex-col">
        {/* Navigation 
              ${
                  scrolled ? "bg-white" : "bg-transparent
              */}
        

        {/* Spacer for fixed navbar height */}
        {/* <div className="h-[150px] max-sm:h-[120px]" /> */}
        {/* VIDEO */}
        <div
          className="w-full h-full fixed top-0 left-0 z-[-1] overflow-hidden
                              max-sm:w-full max-sm:h-full max-sm:top-0 max-sm:left-0 max-sm:z-[-1] max-sm:overflow-hidden"
        >
          <video
            className="w-full h-full object-cover"
            src={videoBg}
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

        {/* Image Section */}
        <div className="w-full flex">
          <div className="flex flex-col font-shadows text-[80px] px-20 py-20 max-w-[80rem] mt-[100px] leading-[1.2] max-sm:max-w-[250px] max-sm:px-5 max-sm:text-[30px] max-sm:mt-[-50px]">
            <h1>Merging Creativity with Code and a Touch of Intelligence</h1>
            <div className="text-[33px] font-playfair mt-[35px] max-sm:text-[20px]">
              <h4>- Hi there🙋🏻‍♂, I'm Sai Dhanush Soma</h4>
              <h4>
                I'm &nbsp;
                <TypeAnimation
                  sequence={[
                    " Full Stack Developer",
                    2000, // Wait for 2 seconds
                    () => {
                      // Callback before deleting
                    },
                    "", // Clear the text
                    " Software Engineer",
                    2000, // Wait for 2 seconds
                    () => {
                      // Callback before deleting
                    },
                    "", // Clear the text
                    " AI/ML Enthusiast",
                    2000, // Wait for 2 seconds
                    () => {
                      // Callback before deleting
                    },
                    "", // Clear the text
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                  className="text-[#04ac7c] font-bold"
                />
              </h4>
              <p className="text-[18px] ml-[55px] px-40 justify-center py-5 max-w-[1000px] flex-row">
                A Software Engineer with 1.5 years of experience, dedicated to
                write clean, efficient, maintainable code and integrating
                AI-driven solutions.
              </p>
            </div>
          </div>

          <img
            src={sid}
            alt="Sid's portfolio"
            className="  py-1 px-12  w-[730px] max-sm:w-[300px] h-auto object-contain " /*max-sm:justify-center max-sm:items-center max-sm:px-4 */
          />
        </div>

        {/* Work Experience*/}

        {/* <Spline className="p-4 w-[20%] h-[20%] shadow-lg" scene="https://prod.spline.design/cQBHcW-AdrRvh6AS/scene.splinecode" /> */}
      </div>
    </motion.div>
  );
}
