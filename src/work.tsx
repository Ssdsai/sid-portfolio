import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import gifenigma from "./assets/projects/gif enigma/gifenigma.jpeg"; ///project 1
import mywell from "./assets/projects/my well/MY WELL.png"; //// project 2
import cuisineconnect from "./assets/projects/cuisine-connect/logo.png"; //////  project 3
import work from "./assets/video/work.mp4";

import reactLogo from "./assets/tools/react.png";
import tailwindLogo from "./assets/tools/tailwind.png";

import MyWell_UserAuth from "./assets/projects/my well/User Authentication 1.jpg";
import MyWell_Login   from "./assets/projects/my well/Login Page 2.jpg";
import MyWell_Create   from "./assets/projects/my well/Create Page 3.jpg";
import MyWell_Dashboard   from "./assets/projects/my well/Dashboard 4.jpg";
import MyWell_Alert   from "./assets/projects/my well/Alert 5.jpg";
import MyWell_UserUI   from "./assets/projects/my well/User UI 6.jpg";
import MyWell_Profile   from "./assets/projects/my well/User Profile 7.jpg"
import MyWell_VideoDash   from "./assets/projects/my well/Video Dashboard 8.jpg";
import MyWell_MessageUI   from "./assets/projects/my well/Message UI 9.jpg";
import MyWell_VideoCall   from "./assets/projects/my well/Video Call 10.jpg";
import MyWell_Recommendation   from "./assets/projects/my well/Recommendation by AI 11.jpg";

import CC from "./assets/projects/cuisine-connect/Cuisine Connect.png";
import CC1 from "./assets/projects/cuisine-connect/Cuisine Connect1.png";
import CC2 from "./assets/projects/cuisine-connect/Cuisine Connect2.png";
import CC3 from "./assets/projects/cuisine-connect/Cuisine Connect3.png";
import CC4 from "./assets/projects/cuisine-connect/Cuisine Connect4.png";
import CC5 from "./assets/projects/cuisine-connect/Cuisine Connect5.png";
import CC6 from "./assets/projects/cuisine-connect/Cuisine Connect6.png";
/*{ darken }: { darken: boolean }*/ 

function Work() {
  const [open, setOpen] = useState<number | null>(null);
  const busRef = useRef(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  {/*GIF Enigma Reddit Start*/}
  const tools = [
    { name: "ReactJS", src:"https://img.icons8.com/?size=100&id=25Sjy8fKExYA&format=png&color=000000" },
    { name: "TailwindCSS", src:"https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
    { name: "TypeScript", src:"https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000" },
    // Add other tools here
  ];
  {/*GIF Enigma Reddit Start*/}

  {/*My Well Start*/}
  const mywell_images = [
    MyWell_UserAuth, MyWell_Login, MyWell_Create, MyWell_Dashboard, MyWell_Alert, MyWell_UserUI, MyWell_Profile, MyWell_VideoDash, MyWell_MessageUI, MyWell_VideoCall, MyWell_Recommendation
  ];
  {/*My Well End*/}

  {/*Cuisine Connect Start*/}
  const [currentCuisine, setCurrentCuisine] = useState(0);
  const cuisineImages = [
    CC, CC1, CC2, CC3, CC4, CC5, CC6
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCuisine((prev) => (prev + 1) % cuisineImages.length);
    }, 3000); // Slides every 3 seconds
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, [cuisineImages.length]);
  {/*Cuisine Connect End*/}

  return (
    <div className={` flex flex-col `}>{/*bg-[#E8E5DA] transition-colors duration-700 bg-transparent */}
      {/* Road + Bus Transition */}
      {/* <div className="relative w-full h-32 z-50 flex items-center">
        <div className="h-[4px] bg-black w-full mx-12 rounded mt-[-5px]" />
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
      </div> */}

      <section className="py-20 px-6 md:px-20 relative">
        {/* <div className="flex justify-center items-center">
      <video 
            className=" w-[50%] h-[50%]  mt-[-400px]"
            src={work} 
            autoPlay
            loop
            muted
            playsInline></video>              bg-[#ececec]
            </div> */}
        {/* <h2 className="text-4xl md:text-5xl text-playfair mb-12 text-[#F2F2F2] text-left"></h2> */}

        {/* ----------- Project 1 ----------- */}
        <div
          onClick={() => toggle(1)}
          className="group block border-b border-gray-700 py-6 px-6 width-[150%] transition duration-300 bg-white hover:bg-gray-800 bg-opacity-100 cursor-pointer
          rounded-xl"
        >
          <div className="flex items-center gap-6">
            <img
              src={gifenigma}
              alt="GIF ENIGMA"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-2xl md:text-3xl font-abel text-black group-hover:text-[#FFFFFF] group-hover:translate-x-2 transform transition duration-300">
                  GIF ENIGMA Reddit
                </h3>
                <span className="text-gray-500 group-hover:text-gray-700 transition duration-300">
                  {open === 1 ? "−" : "→"}
                </span>
              </div>

              <div className="mt-1 flex items-center gap-4 flex-wrap text-sm">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-1 px-3 rounded-full font-medium shadow-md">
                  Devvit Game
                </span>
                <span className="text-gray-500">
                  Built Feb 2025 - March 2025
                </span>
              </div>

              <p className="mt-2 text-gray-600 text-sm md:text-base">
                An animated guessing game where every GIF is a clue to a word or
                phrase
              </p>

              {/* Buttons */}
              <div
                className="mt-4 flex gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href="https://www.reddit.com/r/PlayGIFEnigma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                >
                  🔗 Live Now
                </a>
                <a
                  href="https://github.com/Ssdsai/gif-enigma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-600 transition"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Accordion Content */}
          {open === 1 && (
            <div className="mt-6 md:flex md:gap-6">
              {/* Info Left */}
              <div className="md:w-1/2 hover:text-gray-500">
                <p className="text-gray-500  mb-4">
                  A Reddit-native guessing game using Devvit. Users guess based
                  on animated clues.
                </p>
                <ul className="text-sm text-gray-500  list-disc list-inside">
                  <li>Built with React + Devvit SDK</li>
                  <li>Hosted on Reddit as a native app</li>
                  <li>Game state managed using subreddit posts</li>
                </ul>
              </div>

              {/* Media Right */}
              <div className="md:w-1/2 mt-4 md:mt-0">
                <div className="flex justify-center max-sm:justify-center">
                  <iframe
                    className="w-[70%] aspect-video rounded-lg shadow max-sm:w-[90%] "
                    src="https://youtube.com/embed/YVxr9ajbcGg"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>  
          )}


            {/* Tools Section */}
{open === 1 && (
  <div className=" max-sm:mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    {tools.map((tool, index) => (
      <div key={index} className="text-center flex flex-col items-center justify-center">
        <img
          src={tool.src}
          alt={tool.name}
          className="w-16 h-16 mx-auto mb-2 object-contain"
        />
        <p className="text-sm text-gray-500">{tool.name}</p>
      </div>
    ))}
  </div>
)}

        </div>

        {/* ----------- Project 2 ----------- */}
        <div
          onClick={() => toggle(2)}
          className="group block border-b border-gray-700 py-6 px-6 width-[150%] transition duration-300 bg-white  bg-opacity-100 cursor-pointer
          rounded-xl"
        >
          <div className="flex items-center gap-6">
            <img
              src={mywell}
              alt="GIF ENIGMA"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-2xl md:text-3xl font-abel text-black  group-hover:translate-x-2 transform transition duration-300">
                  MY WELL APP
                </h3>
                <span className="text-gray-500 group-hover:text-gray-700 transition duration-300">
                  {open === 2 ? "−" : "→"}
                </span>
              </div>

              <div className="mt-1 flex items-center gap-4 flex-wrap text-sm">
                <span className="bg-gradient-to-r from-black to-white text-white py-1 px-3 rounded-full font-medium shadow-md">
                  UI Designs
                </span>
                <span className="text-gray-500">Built in April 2025</span>
              </div>

              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Personal Healthcare Management System for 65+ Years
              </p>

              {/* Buttons */}
              <div
                className="mt-4 flex gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href="https://www.figma.com/design/TMNKwJ7eSgiWvu7GbGJvqu/MY-WELL--Copy---Community-?node-id=2001-2&p=f&t=qRwhLVr5YBzFHRY8-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                >
                  🔗 Live Now
                </a>
                <a
                  href=" "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-600 transition"
                >
                  
                </a>
              </div>
            </div>
          </div>

          {/* Accordion Content */}
          {open === 2 && (
            <div className="mt-6 md:flex md:gap-6">
              {/* Info Left */}
              <div className="md:w-1/2 hover:text-gray-500">
                <p className="text-gray-500  mb-4">
                  UI Designs with Figma
                </p>
                <ul className="text-sm text-gray-500  list-disc list-inside">
                  <li>Built with React + Devvit SDK</li>
                  <li>Hosted on Reddit as a native app</li>
                  <li>Game state managed using subreddit posts</li>
                </ul>
              </div>

              {/* Media Right */}
              <div className="w-full md:w-1/2 mt-4 md:mt-0 px-4 sm:px-6 lg:px-8">
  <div className="relative w-full min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] text-center overflow-visible object-contain p-4 sm:p-6 md:p-8">
    <div className="relative mx-auto w-[200px] h-[500px] sm:w-[220px] sm:h-[520px] lg:w-[240px] lg:h-[540px] [transform-style:preserve-3d] [transform:perspective(1000px)] animate-autoRun z-20">
      {mywell_images.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 shadow-black-lg"
          style={{
            transform: `rotateY(${
              index * (360 / mywell_images.length)
            }deg) translateZ(400px)`,
          }}
        >
          <img
            src={img}
            alt={`dragon_${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  </div>
</div>


              
            </div>
          )}
        </div>

        {/* ----------- Project 3 ----------- */}
        <div
          onClick={() => toggle(3)}
          className="group block border-b border-gray-700 py-6 px-6 width-[150%] transition duration-300 bg-white hover:bg-gray-800 bg-opacity-100 cursor-pointer
          rounded-xl"
        >
          <div className="flex items-center gap-6">
            <img
              src={cuisineconnect}
              alt="Cuisine Connect"
              className="w-20 h-30 object-cover rounded-md"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-2xl md:text-3xl font-abel text-black group-hover:text-[#FFFFFF] group-hover:translate-x-2 transform transition duration-300">
                  Cuisine Connect
                </h3>
                <span className="text-gray-500 group-hover:text-gray-700 transition duration-300">
                  {open === 3 ? "−" : "→"}
                </span>
              </div>

              <div className="mt-1 flex items-center gap-4 flex-wrap text-sm">
                <span className="bg-gradient-to-r from-blue-800 to-purple-500 text-white py-1 px-3 rounded-full font-medium shadow-md">
                  Full Stack Web App
                </span>
                <span className="text-gray-500">Built Aug 2024 - Dec 2025</span>
              </div>

              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Order Your fav cuisine
              </p>

              {/* Buttons */}
              <div
                className="mt-4 flex gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href=" "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                >
                 
                </a>
                <a
                  href="https://github.com/Ssdsai/Cuisine-Connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-600 transition"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Accordion Content */}
          {open === 3 && (
            <div className="mt-6 md:flex md:gap-6">
              {/* Info Left */}
              <div className="md:w-1/2 hover:text-gray-500">
                <p className="text-gray-500  mb-4">
                  Food Ordering Booking Website
                </p>
                <ul className="text-sm text-gray-500  list-disc list-inside">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              {/* Media Right */}
              {/* Media Right - Responsive Image Slider */}
              <div className="md:w-1/2 mt-4 md:mt-0">
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
                  {cuisineImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Cuisine Connect ${index}`}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                        index === currentCuisine
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0"
                      }`}
                    />
                  ))}
                  {/* Navigation Buttons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentCuisine((prev) =>
                        prev === 0 ? cuisineImages.length - 1 : prev - 1
                      );
                    }}
                    className="absolute top-1/2 left-3 -translate-y-1/2 bg-white bg-opacity-80 text-black px-2 py-1 rounded-full shadow z-20 hover:bg-opacity-100"
                  >
                    ←
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentCuisine((prev) =>
                        prev === cuisineImages.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-white bg-opacity-80 text-black px-2 py-1 rounded-full shadow z-20 hover:bg-opacity-100"
                  >
                    →
                  </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-1 mt-2">
                  {cuisineImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === currentCuisine ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

      </section>
    </div>
  );
}

export default Work;
