import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import videoBg from "./assets/video/bg.mp4";
import { TypeAnimation } from "react-type-animation";
import sid from "./assets/profile.png";
import fallback from "./assets/video/fallback.png";      

export default function Home() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 853);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "center start"],
  });

  const scale = useSpring(
    useTransform(scrollYProgress, [0.5, 1.0], [1, isMobile ? 1.0 : 1.2]),
    { stiffness: 100, damping: 20 }
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [1, 0]),
    { stiffness: 100, damping: 20 }
  );

  return (
    <div ref={containerRef} className="relative z-20 w-full min-h-screen overflow-x-clip overflow-y-hidden">
      <motion.div
        style={{ scale, opacity, transformOrigin: "center" }}
        className="w-full"
      >
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
          preload="none" // <-- Add this
          poster={fallback}
        />
      </div>

      {/* Zoomable Content */}
      
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-[100px] py-16 lg:py-[60px]">
          {/* Text Section */}
          <div className="flex flex-col text-black font-shadows text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] leading-tight max-w:[95%] lg:max-w-[55%] max-sm:mt-[65px] lg:mt-[120px] md:mt-[100px]">
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
              <p className="mt-5 text-sm sm:text-base md:text-[20px] lg:text-[16px] text-black max-w-[90%]">
                A Software Engineer with 1.5 years of experience, dedicated to writing clean,
                efficient, maintainable code and integrating AI-driven solutions.
              </p>
              <a
                href="https://drive.google.com/file/d/1g6oDIuS4T98qFm8IUpFf74wiQUg81NWU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block mt-6 w-fit border border-black rounded-lg px-6 py-2 font-playfair text-sm sm:text-base md:text-lg text-black overflow-hidden group transition-all duration-200"
              >
                <span className="absolute inset-0 bg-gray-800 h-0 group-hover:h-full transition-all duration-300 ease-in-out z-0"></span>
                <span className="relative z-10 group-hover:text-white">Resume</span>
              </a>

            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex mt-10 lg:mt-[80px] lg:ml-20">
            <img
              src={sid}
              alt="Sid's portfolio"
              className="object-contain w-[240px] sm:w-[300px] md:w-[400px] lg:w-[800px] xl:w-[570px] 2xl:w-[650px] drop-shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 w-[70%] mt-[15px] h-8 bg-gradient-to-t from-white to-transparent z-10 rounded-lg ml-[10%]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
