import React, { useRef, useState, useEffect } from "react";
import "particles.js";


import "./index.css";
import sid from "./assets/port - Copy2.png";
import email from "./assets/video/icons8-email.gif"
import { TypeAnimation } from "react-type-animation";

import videoBg from "./assets/video/bg.mp4";

import gifenigma from "./assets/projects/gif enigma/gifenigma.jpeg";
import { useScroll, useTransform, motion } from "framer-motion";

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

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const busRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const visible = entries.find((entry) => entry.isIntersecting);
  //       if (visible) {
  //         const index = Number(visible.target.getAttribute("data-index"));
  //         setActiveIndex(index);
  //       }
  //     },
  //     {
  //       threshold: 0.5,
  //     }
  //   );

  //   projectRefs.current.forEach((ref) => {
  //     if (ref) observer.observe(ref);
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  {/* Nav Elements Hover Movement */}
  {/* Nav Elements Hover Movement */}


  
  

  return (
    <div ref={containerRef} className="  flex flex-col">
       <nav
      className={`w-full py-10 max-sm:py-12  px-4 lg:px-12 lg:py-11 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow-md backdrop-blur-md" : "bg-transparent"
}`}
    >
      <div className="flex justify-between items-center">
        {/* Logo or Title (optional) */}
        <div className="text-xl font-bold font-playfair text-black">
          Sid's Portfolio
        </div>

        {/* Desktop Nav */}
        <ul
          className={`hidden lg:flex gap-12 text-[25px] text-black font-playfair font-semibold`}
        >
          <li className="hover:underline cursor-pointer">about</li>
          <li className="hover:underline cursor-pointer">experience</li>
          <li className="hover:underline cursor-pointer">projects</li>
          <li className="hover:underline cursor-pointer">contact</li>
          <li className="flex gap-5 ml-4">
            <a
              href="https://www.linkedin.com/in/ssdhanush/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=nTY9sWZezkri&format=png&color=000000"
                alt="Linked In"
                className="w-10 h-10 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://github.com/Ssdsai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"
                alt="GitHub"
                className="w-10 h-10 rounded-[35px] hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://discord.com/channels/sid161201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=jCIaYGMYhY9d&format=png&color=000000"
                alt="Discord"
                className="w-10 h-10 rounded-[35px] hover:scale-110 transition-transform"
              />
            </a>
            
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          className="lg:hidden cursor-pointer z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1">
            <div className="w-8 h-1 bg-black rounded" />
            <div className="w-8 h-1 bg-black rounded" />
            <div className="w-8 h-1 bg-black rounded" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-white/90 backdrop-blur-md z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0 mt-[-10px]" : "opacity-0 -translate-y-5 "
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-[18px] font-playfair text-black font-medium">
          <li onClick={() => setIsMenuOpen(false)} className="hover:underline">about</li>
          <li onClick={() => setIsMenuOpen(false)} className="hover:underline">experience</li>
          <li onClick={() => setIsMenuOpen(false)} className="hover:underline">projects</li>
          <li onClick={() => setIsMenuOpen(false)} className="hover:underline">contact</li>
          <div className="flex gap-5 mt-2">
            <a
              href="https://www.linkedin.com/in/ssdhanush/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=nTY9sWZezkri&format=png&color=000000"
                alt="Linked In"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://github.com/Ssdsai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"
                alt="GitHub"
                className="w-8 h-8 rounded-[35px]"
              />
            </a>
            <a
              href="https://discord.com/channels/sid161201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=jCIaYGMYhY9d&format=png&color=000000"
                alt="Discord"
                className="w-8 h-8 rounded-[35px]"
              />
            </a>
          </div>
        </ul>
      </div>
    </nav>


      {/* Road + Bus */}
      <div
  className={`fixed top-20 left-0 w-full h-32 flex items-center mt-[-25px] lg:mt-[-18px] md:mt-[-35px] transition-all duration-300 ${
    isMenuOpen ? "z-30" : "z-50"
  }`}
>

        <div className="h-[4px] bg-black w-full mx-12 rounded mt-[2px]" />
        <img
          ref={busRef}
          src="https://img.icons8.com/?size=100&id=112232&format=png&color=000000"
          alt="Bus"
          className="absolute transition-transform duration-300 mt-[-62px]"
          style={{
            left: `${scrollProgress * 100}%`,
            transform: "translateX(-50%)",
            width: "60px",
            height: "auto",
          }}
        />
      </div>

      {/* <Spline className="p-4 w-[20%] h-[20%] shadow-lg" scene="https://prod.spline.design/cQBHcW-AdrRvh6AS/scene.splinecode" /> */}
    </div>
  );
}

// require("./assets/react.png"),
// require("./assets/tailwind.png"),
// require("./assets/javascript.png"),
// require("./assets/typescript.png"),
// require("./assets/nodejs.png"),

const images = [
  // require("./assets/Cuisine Connect.png"),
  // require("./assets/Cuisine Connect3.png"),
  // require("./assets/Cuisine Connect5.png"),
  // require("./assets/Cuisine Connect9.png"),
  // require("./assets/Cuisine Connect.png"),
  // require("./assets/Cuisine Connect9.png"),

  require("./assets/projects/my well/User Authentication 1.jpg"),
  require("./assets/projects/my well/Login Page 2.jpg"),
  require("./assets/projects/my well/Create Page 3.jpg"),
  require("./assets/projects/my well/Dashboard 4.jpg"),
  require("./assets/projects/my well/Alert 5.jpg"),
  require("./assets/projects/my well/User UI 6.jpg"),
  require("./assets/projects/my well/User Profile 7.jpg"),
  require("./assets/projects/my well/Video Dashboard 8.jpg"),
  require("./assets/projects/my well/Message UI 9.jpg"),
  require("./assets/projects/my well/Video Call 10.jpg"),
  require("./assets/projects/my well/Recommendation by AI 11.jpg"),
];

export const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  /*Image Slider */

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 relative overflow-hidden">
      <div className="relative w-full h-80 rounded-lg shadow-lg">
        {images.map((img, index) => (
          <img
            key={index}
            src={`${img}`}
            alt={`slide-${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-90 text-black p-2 rounded-full shadow-md z-20"
        >
          ⬅️
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-90 text-black p-2 rounded-full shadow-md z-20"
        >
          ➡️
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

// /*Banner*/

// export const Banner = () => {
//   return (
//     <div className="relative w-full h-[55vh] text-center overflow-hidden object-contain p-10 max-sm:h-[80vh]">
      
//       <div className="absolute w-[200px] h-[450px] top-[10%] left-1/2 -translate-x-1/2 [transform-style:preserve-3d] [transform:perspective(1000px)] animate-autoRun z-20">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className="absolute inset-0 shadow-black-lg"
//             style={{
//               transform: `rotateY(${
//                 index * (360 / images.length)
//               }deg) translateZ(350px)`,
//             }}
//           >
//             <img
//               src={`${img}`}
//               alt={`dragon_${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



