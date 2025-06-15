import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import gifenigma from "./assets/projects/gif enigma/gifenigma.jpeg"; ///project 1
import mywell from "./assets/projects/my well/MY WELL.png"; //// project 2
import cuisineconnect from "./assets/projects/cuisine-connect/logo.png"; //////  project 3

import work from "./assets/video/work.mp4";

import reactLogo from "./assets/tools/react.png";
import tailwindLogo from "./assets/tools/tailwind.png";
import openai from "./assets/about/openai.jpg";
import langchain from "./assets/about/langchain.png";
import sklearn from "./assets/about/sklearn.png";
import seaborn from "./assets/about/seaborn.png";
import twilio from "./assets/about/twilio.png";

import MyWell_UserAuth from "./assets/projects/my well/User Authentication 1.jpg";
import MyWell_Login from "./assets/projects/my well/Login Page 2.jpg";
import MyWell_Create from "./assets/projects/my well/Create Page 3.jpg";
import MyWell_Dashboard from "./assets/projects/my well/Dashboard 4.jpg";
import MyWell_Alert from "./assets/projects/my well/Alert 5.jpg";
import MyWell_UserUI from "./assets/projects/my well/User UI 6.jpg";
import MyWell_Profile from "./assets/projects/my well/User Profile 7.jpg";
import MyWell_VideoDash from "./assets/projects/my well/Video Dashboard 8.jpg";
import MyWell_MessageUI from "./assets/projects/my well/Message UI 9.jpg";
import MyWell_VideoCall from "./assets/projects/my well/Video Call 10.jpg";
import MyWell_Recommendation from "./assets/projects/my well/Recommendation by AI 11.jpg";

import CC from "./assets/projects/cuisine-connect/Cuisine Connect.png";
import CC1 from "./assets/projects/cuisine-connect/Cuisine Connect1.png";
import CC2 from "./assets/projects/cuisine-connect/Cuisine Connect2.png";
import CC3 from "./assets/projects/cuisine-connect/Cuisine Connect3.png";
import CC4 from "./assets/projects/cuisine-connect/Cuisine Connect4.png";
import CC5 from "./assets/projects/cuisine-connect/Cuisine Connect5.png";
import CC6 from "./assets/projects/cuisine-connect/Cuisine Connect6.png";
/*{ darken }: { darken: boolean }*/

import sn from "./assets/projects/smartnest/1.smartnest.png";
import sn1 from "./assets/projects/smartnest/smartnest_1.png";
import sn2 from "./assets/projects/smartnest/smartnest_2.png";
import sn3 from "./assets/projects/smartnest/smartnest_3.png";
import sn4 from "./assets/projects/smartnest/smartnest_4.png";
import sn5 from "./assets/projects/smartnest/smartnest_5.png";
import sn6 from "./assets/projects/smartnest/smartnest_6.png";
import sn7 from "./assets/projects/smartnest/smartnest_7.png";
import sn8 from "./assets/projects/smartnest/smartnest_8.png";
import sn9 from "./assets/projects/smartnest/smartnest_9.png";
import sn10 from "./assets/projects/smartnest/smartnest_10.png";
import sn11 from "./assets/projects/smartnest/smartnest_11.png";
import sn12 from "./assets/projects/smartnest/smartnest_12.png";
import sn13 from "./assets/projects/smartnest/smartnest_13.png";
import sn14 from "./assets/projects/smartnest/smartnest_14.png";

import ccfd from "./assets/projects/ml.credit-card/1.credit.png";
import ccfd1 from "./assets/projects/ml.credit-card/credit_1.png";
import ccfd2 from "./assets/projects/ml.credit-card/credit_2.png";
import ccfd3 from "./assets/projects/ml.credit-card/credit_3.png";
import ccfd4 from "./assets/projects/ml.credit-card/credit_4.png";
import ccfd5 from "./assets/projects/ml.credit-card/credit_5.png";
import ccfd6 from "./assets/projects/ml.credit-card/credit_6.png";
import ccfd7 from "./assets/projects/ml.credit-card/credit_7.png";
import ccfd8 from "./assets/projects/ml.credit-card/credit_8.png";
import ccfd9 from "./assets/projects/ml.credit-card/credit_9.png";

import fit from "./assets/projects/fitpulse/fit.jpg";
import fit1 from "./assets/projects/fitpulse/fit_1.jpg";
import fit2 from "./assets/projects/fitpulse/fit_2.jpg";
import fit3 from "./assets/projects/fitpulse/fit_3.jpg";
import fit4 from "./assets/projects/fitpulse/fit_4.jpg";
import fit5 from "./assets/projects/fitpulse/fit_5.jpg";
import fit6 from "./assets/projects/fitpulse/fit_6.jpg";
import fit7 from "./assets/projects/fitpulse/fit_7.jpg";
import fit8 from "./assets/projects/fitpulse/fit_8.jpg";
import fit9 from "./assets/projects/fitpulse/fit_9.jpg";


function Work() {
  const [open, setOpen] = useState<number | null>(null);
  const busRef = useRef(null);

  const projectRefs = useRef<Record<number, HTMLDivElement | null>>({});      //added button just so that the as opened slides little below
  const toggle = (i: number) => {
    const isOpening = open !== i;             //added button just so that the as opened slides little below
    setOpen(open === i ? null : i);

    // Scroll into view only if opening
  if (isOpening && projectRefs.current[i]) {      //added button just so that the as opened slides little below
    setTimeout(() => {                            //added button just so that the as opened slides little below
      projectRefs.current[i]?.scrollIntoView({    //added button just so that the as opened slides little below
        behavior: "smooth",                       //added button just so that the as opened slides little below
        block: "start",                           //added button just so that the as opened slides little below
      });                                         //added button just so that the as opened slides little below
    }, 50);                                       //added button just so that the as opened slides little below
  }                                               //added button just so that the as opened slides little below

  };

  {
    /*GIF Enigma Reddit Start*/
  }
  const gif_tools = [
    {
      name: "ReactJS",
      src: "https://img.icons8.com/?size=100&id=25Sjy8fKExYA&format=png&color=000000",
    },
    {
      name: "TailwindCSS",
      src: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
    },
    {
      name: "TypeScript",
      src: "https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000",
    },
  ];
  {
    /*GIF Enigma Reddit Start*/
  }

  {
    /*My Well Start*/
  }
  const mywell_images = [
    MyWell_UserAuth,
    MyWell_Login,
    MyWell_Create,
    MyWell_Dashboard,
    MyWell_Alert,
    MyWell_UserUI,
    MyWell_Profile,
    MyWell_VideoDash,
    MyWell_MessageUI,
    MyWell_VideoCall,
    MyWell_Recommendation,
  ];
  const mywell_tools = [
    {
      name: "Figma",
      src: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
    },
  ];
  {
    /*My Well End*/
  }

  {
    /*Cuisine Connect Start*/
  }
  const [currentCuisine, setCurrentCuisine] = useState(0);
  const cuisineImages = [CC, CC1, CC2, CC3, CC4, CC5, CC6];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCuisine((prev) => (prev + 1) % cuisineImages.length);
    }, 3000); // Slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [cuisineImages.length]);

  const cc_tools = [
    {
      name: "ReactJS",
      src: "https://img.icons8.com/?size=100&id=25Sjy8fKExYA&format=png&color=000000",
    },
    {
      name: "CSS3",
      src: "https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000",
    },
    {
      name: "Python",
      src: "https://img.icons8.com/?size=100&id=W3gfKnMhfM6h&format=png&color=000000",
    },
    {
      name: "Flask",
      src: "https://img.icons8.com/?size=100&id=TtXEs5SeYLG8&format=png&color=000000",
    },
    {
      name: "OpenAI",
      src: openai,
    },
    {
      name: "LangChain",
      src: langchain,
    },
  ];

  {
    /*Cuisine Connect End*/
  }

  {
    /*Smart Nest Start*/
  }
  const [currentSmartNest, setCurrentSmartNest] = useState(0);
  const smartnestImages = [sn1, sn2, sn3, sn4, sn5, sn6, sn7, sn8, sn9, sn10, sn11, sn12, sn13, sn14];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSmartNest((prev) => (prev + 1) % smartnestImages.length);
    }, 3000); // Slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [smartnestImages.length]);

  const smartnest_tools = [
    {
      name: "ReactJS",
      src: "https://img.icons8.com/?size=100&id=25Sjy8fKExYA&format=png&color=000000",
    },
    {
      name: "CSS3",
      src: "https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000",
    },
    {
      name: "Java",
      src: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
    },
    {
      name: "Apache Tomcat",
      src: "https://img.icons8.com/?size=100&id=QFcVqyh6lBh6&format=png&color=000000",
    },
    {
      name: "MySQL",
      src: "https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000",
    },
    {
      name: "MongoDB",
      src: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000",
    },
    {
      name: "Python",
      src: "https://img.icons8.com/?size=100&id=W3gfKnMhfM6h&format=png&color=000000",
    },
    {
      name: "Flask",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    },
    {
      name: "Docker",
      src: "https://img.icons8.com/?size=100&id=22813&format=png&color=000000",
    },
    {
      name: "OpenAI API",
      src: openai,
    },
    {
      name: "LangChain",
      src: langchain,
    },
  ];

  {
    /*Smart Nest End*/
  }

  {
    /*Credit Card Fraud Detection Start*/
  }
  const [currentCCFD, setCurrentCCFD] = useState(0);
  const ccfdImages = [ccfd, ccfd1, ccfd2, ccfd3, ccfd4, ccfd5, ccfd6, ccfd7, ccfd8, ccfd9];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCCFD((prev) => (prev + 1) % ccfdImages.length);
    }, 3000); // Slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [ccfdImages.length]);

  const ccfd_tools = [
    {
      name: "Python",
      src: "https://img.icons8.com/?size=100&id=W3gfKnMhfM6h&format=png&color=000000",
    },
    {
      name: "Numpy",
      src: "https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000",
    },
    {
      name: "Pandas",
      src: "https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000",
    },
    {
      name: "Scikit-Learn",
      src: sklearn,
    },
    {
      name: "Seaborn",
      src: seaborn,
    },
    {
      name: "Matplotlib",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
    },
    {
      name: "Tensor Flow",
      src: "https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000",
    },
    
  ];

  {
    /*Credit Card Fraud Detection End*/
  }

  {
    /*Fit Pulse Start*/
  }
  const [currentFP, setCurrentFP] = useState(0);
  const fitImages = [fit, fit1, fit2, fit3, fit4, fit5, fit6, fit7, fit8, fit9];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFP((prev) => (prev + 1) % fitImages.length);
    }, 3000); // Slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [fitImages.length]);

  const fit_tools = [
    {
      name: "ReactJS",
      src: "https://img.icons8.com/?size=100&id=25Sjy8fKExYA&format=png&color=000000",
    },
    {
      name: "CSS3",
      src: "https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000",
    },
    {
      name: "MongoDB",
      src: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000",
    },
    { 
      name: 'Node.js',
      src: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000'
    },
    { 
      name: 'Express',
      src: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000'
    },
    { 
      name: 'Twilio API',
      src: twilio
    }  
    
  ];

  {
    /*Fit Pulse End*/
  }

  {
    /*Recognition Start*/
  }
  // const [currentRecog, setCurrentRecog] = useState(0);
  // const recogImages = [fit, fit1, fit2, fit3, fit4, fit5, fit6, fit7, fit8, fit9];
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentFP((prev) => (prev + 1) % recogImages.length);
  //   }, 3000); // Slides every 3 seconds

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, [fitImages.length]);

  // const fit_tools = [
  //   {
  //     name: "ReactJS",
  //     src: "https://img.icons8.com/?size=100&id=25Sjy8fKExYA&format=png&color=000000",
  //   },
  //   {
  //     name: "CSS3",
  //     src: "https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000",
  //   },
  //   {
  //     name: "MongoDB",
  //     src: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000",
  //   },
  //   { 
  //     name: 'Node.js',
  //     src: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000'
  //   },
  //   { 
  //     name: 'Express',
  //     src: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000'
  //   },
  //   { 
  //     name: 'Twilio API',
  //     src: twilio
  //   }  
    
  // ];

  {
    /*Recognition End*/
  }


  return (
    <div className={` flex flex-col `}>
      {/*bg-[#E8E5DA] transition-colors duration-700 bg-transparent */}
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
          ref={(el) => {
            projectRefs.current[1] = el;
          }}
          onClick={(e) => {
          e.stopPropagation();   // stop bubbling
          e.preventDefault();    // prevent accidental anchor jumps
          toggle(1); }}
          className="group block border-b border-gray-700 py-3 px-6 width-[150%] transition duration-300 bg-white hover:bg-gray-800 bg-opacity-100 cursor-pointer
          rounded-xl"
        >
          <div className="flex items-center gap-6">
            <img
              src={gifenigma}
              alt="GIF ENIGMA"
              className="w-20 h-20 object-cover rounded-md max-sm:mt-4"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-2xl md:text-3xl font-abel max-sm:text-md max-sm:left-10 max-sm:absolute text-black group-hover:text-[#FFFFFF] group-hover:translate-x-2 transform transition duration-300">
                  GIF ENIGMA
                </h3>
                <span className="text-gray-500 group-hover:text-gray-700 transition duration-300 max-sm:ml-16">
                  {open === 1 ? "−" : "→"}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-4 flex-wrap text-sm max-sm:mt-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-1 px-3 rounded-full font-medium shadow-md max-sm:mt-[-12px] max-sm:px-2">
                  Full Stack Web App
                </span>
                <span className="text-gray-500 max-sm:text-[13px] max-sm:mt-[-8px] font-lora">
                  Built Feb 2025 - March 2025
                </span>
              </div>

              <p className="mt-1 text-gray-500 text-sm md:text-base font-lora max-sm:text-[12px] lg:text-[18px] leading-snug md:leading-normal lg:leading-relaxed">
                An animated guessing game where every GIF is a clue to a word or
                phrase
              </p>

              {/* <span className="text-gray-500 group-hover:text-gray-700 transition duration-300 max-sm:absolute max-sm:left-12 max-sm:text-[12px] max-sm:mt-1">
                  {open === 1 ? "−" : "Click to View →"}
              </span> */}
              {/* Buttons */}
              <div
                className="mt-4 flex gap-4 max-sm:gap-12 max-sm:mt-3"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  onClick={(e) => e.stopPropagation()}
                  href="https://www.reddit.com/r/PlayGIFEnigma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center max-sm:right-16 max-sm:text-[13px] max-sm:absolute max-sm:flex-row gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                >
                  🔗 Live Now
                </a>
                <a
                  onClick={(e) => e.stopPropagation()}
                  href="https://github.com/Ssdsai/gif-enigma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center max-sm:text-[13px] gap-1 text-sm font-medium text-gray-500 hover:text-gray-600 transition"
                >
                  <img
                  src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                  alt="GitHub"
                  className="w-8 h-8 rounded-[5px] hover:scale-105 transition-transform"
                /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Accordion Content */}
          {open === 1 && (
            <div className="mt-6 md:flex md:gap-6">
              {/* Info Left */}
              <div className="md:w-1/2 hover:text-gray-500">
                <p className="text-gray-500  mb-4 max-sm:text-[13px] lg:text-[15px] font-lora">
                  A Reddit-native guessing game using Devvit. Users guess based
                  on animated clues.
                </p>
                <ul className="text-sm text-gray-500  list-disc list-inside max-sm:text-[12px] font-winky">
                  <li>
                    Each puzzle follows a carefully designed progression from
                    abstract connections to more direct clues, guided by
                    suggestions from Google's Gemini API to search terms
                  </li>
                  <li>
                    Wide variety of visual hints from categories such as 🎬
                    Movies, 🎮 Games, 📚 Books, and General
                  </li>
                  <li>
                    Built with React, Typescript and Tailwindcss + Devvit SDK
                  </li>
                  <li>Tenor API + Gemini API for gif's and terms</li>
                  <li>Hosted on Reddit as a native app</li>
                </ul>
              </div>

              {/* Media Right */}
              <div className="md:w-1/2 mt-4 md:mt-0">
                <div className="flex justify-center max-sm:justify-center">
                  <iframe
                    className="w-[70%] aspect-video rounded-lg shadow max-sm:w-[90%] md:w-[100%]"
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
            <div className="max-sm:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-28 max-sm:gap-6 max-sm:flex max-sm:flex-row w-fit mx-auto">
              {gif_tools.map((tool, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center justify-center"
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="w-14 h-14 max-sm:w-8 max-sm:h-8 mx-auto mb-1 object-cover"
                  />
                  <p className="text-sm max-sm:text-[12px] font-winky text-gray-500 leading-tight">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ----------- Project 2 ----------- */}
        <div
        ref={(el) => {
            projectRefs.current[2] = el;
          }}
          onClick={(e) => {
          e.stopPropagation();   // stop bubbling
          e.preventDefault();    // prevent accidental anchor jumps
          toggle(2);}}
          className="group block border-b border-gray-700 py-3 px-6 width-[150%] transition duration-300 bg-white  bg-opacity-100 cursor-pointer
          rounded-xl"
        >
          <div className="flex items-center gap-6">
            <img
              src={mywell}
              alt="MY WELL"
              className="w-20 h-20 object-cover rounded-md max-sm:mt-4"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-2xl md:text-3xl font-abel text-black max-sm:text-md max-sm:left-10 max-sm:absolute text-black  group-hover:translate-x-2 transform transition duration-300">
                  MY WELL APP
                </h3>
                <span className="text-gray-500 group-hover:text-gray-700 transition duration-300 max-sm:ml-16">
                  {open === 2 ? "−" : "→"}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-4 flex-wrap text-sm max-sm:mt-4">
                <span className="bg-gradient-to-r from-black to-white text-white py-1 px-3 rounded-full font-medium shadow-md max-sm:mt-[-10px] max-sm:px-2">
                  UI Designs with Figma
                </span>
                <span className="text-gray-500 max-sm:text-[14px] max-sm:mt-[-4px] font-lora">
                  Built in April 2025
                </span>
              </div>

              <p className="mt-1 text-gray-600 text-sm md:text-base font-lora max-sm:text-[12px] lg:text-[18px] leading-snug md:leading-normal lg:leading-relaxed">
                Personal Healthcare Management System for 65+ Years
              </p>

              {/* Buttons */}
              <div
                className="mt-3 flex gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  onClick={(e) => e.stopPropagation()}
                  href="https://www.figma.com/design/TMNKwJ7eSgiWvu7GbGJvqu/MY-WELL--Copy---Community-?node-id=2001-2&p=f&t=qRwhLVr5YBzFHRY8-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                >
                  🔗 Live Now (Figma File)
                </a>
                {/* <a
                  href=" "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-600 transition"
                ></a> */}
              </div>
            </div>
          </div>

          {/* Accordion Content */}
          {open === 2 && (
            <div className="mt-6 md:flex md:gap-6">
              {/* Info Left */}
              <div className="md:w-1/2 hover:text-gray-500">
                <p className="text-gray-500 mb-4 max-sm:text-[13px] lg:text-[15px] font-lora">
                  A smart healthcare system for elderly users (age:65+)integrating wearable technology and mobile applications to enhance elderly well-being through real-time monitoring, AI-driven recommendations, and emergency response mechanisms.
                </p>
                <ul className="text-sm text-gray-500  list-disc list-inside max-sm:text-[12px] font-winky">
                  <li>Real-time health tracking using a wearable with sensors for vitals like heart rate, SpO₂, and motion detection.</li>
                  <li>Emergency alert system that notifies caregivers or services on detecting falls or anomalies.</li>
                  <li>AI-powered health recommendations adapting to user behavior and health patterns.</li>
                  <li>Intuitive mobile app with large fonts, voice commands, and high-contrast UI for elderly users.</li>
                  {/* Tools Section */}
                  {open === 2 && (
                    <div className="max-sm:mt-8 md:mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
                      {mywell_tools.map((tool, index) => (
                        <div
                          key={index}
                          className="text-center flex flex-col items-center justify-center"
                        >
                          <img
                            src={tool.src}
                            alt={tool.name}
                            className="w-14 h-14 max-sm:w-8 max-sm:h-8 mx-auto mb-1 object-cover"
                          />
                          <p className="text-sm max-sm:text-[12px] font-winky text-gray-500 leading-tight">
                            {tool.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </ul>
              </div>

              {/* Media Right */}
              <div className="w-full md:w-1/2 mt-4 md:mt-48 px-4 sm:px-6 lg:px-8">
                <div className="relative w-full min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] text-center overflow-visible object-contain p-4 sm:p-6 md:p-8">
                  <div className="relative mx-auto w-[200px] h-[500px] max-sm:w-[230px] sm:h-[520px] md:w-[230px] md:ml-[-170px] lg:w-[230px] lg:h-[540px] [transform-style:preserve-3d] [transform:perspective(1000px)] animate-autoRun z-20">
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
          ref={(el) => {
              projectRefs.current[3] = el;
            }}
          onClick={(e) => {
          e.stopPropagation();   // stop bubbling
          e.preventDefault();    // prevent accidental anchor jumps
          toggle(3);}}
          className="group block border-b border-gray-700 py-3 px-6 width-[150%] transition duration-300 bg-white hover:bg-gray-800 bg-opacity-100 cursor-pointer
          rounded-xl"
        >
          <div className="flex items-center gap-6">
            <img
              src={cuisineconnect}
              alt="Cuisine Connect"
              className="w-20 h-30 object-cover rounded-md max-sm:mt-4"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-2xl md:text-3xl max-sm:text-md max-sm:left-10 max-sm:absolute font-abel text-black group-hover:text-[#FFFFFF] group-hover:translate-x-2 transform transition duration-300">
                  Cuisine Connect
                </h3>
                <span className="text-gray-500 group-hover:text-gray-700 transition duration-300 max-sm:ml-16">
                  {open === 3 ? "−" : "→"}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-4 flex-wrap text-sm max-sm:mt-4">
                <span className="bg-gradient-to-r from-blue-800 to-purple-500 text-white py-1 px-3 rounded-full font-medium shadow-md max-sm:mt-[-7px] max-sm:px-2">
                  Full Stack Web App
                </span>
                <span className="text-gray-500 max-sm:text-[14px]  max-sm:mt-[-5px] text-[15px] font-lora">
                  Built Aug 2024 - Dec 2024
                </span>
              </div>

              <p className="mt-1 text-gray-500 text-[30px] text-sm max-sm:text-[13px] md:text-base font-lora leading-snug md:leading-normal lg:leading-relaxed">
                Food Ordering Website with AI Assistance
              </p>

              {/* Buttons */}
              <div
                className="mt-4 flex gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* <a
                  href=" "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                ></a> */}
                <a
                  onClick={(e) => e.stopPropagation()}
                  href="https://github.com/Ssdsai/Cuisine-Connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-600 transition"
                >
                  <img
                  src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                  alt="GitHub"
                  className="w-8 h-8 rounded-[5px] hover:scale-105 transition-transform"
                />  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Accordion Content */}
          {open === 3 && (
            <div className="mt-6 md:flex md:gap-6">
              {/* Info Left */}
              <div className="md:w-1/2 hover:text-gray-500 font-lora">
                <p className="text-gray-500  mb-4">
                  Food Service application delivers tailored menu suggestions and seamless ordering through a user-friendly chatbot
                </p>
                <ul className="text-sm text-gray-500  list-disc list-inside font-winky">
                  <li>Automated Decision-Making: Enable AI agents to analyze images and text inputs to decide among actions like Refund, Replace, Decline, or Escalate to a human Agent.</li>
                  <li>The Cuisine Connect is a customer service and ordering platform designed to simplify enhance the customer experience</li>
                  <li>Order/Shipping Status AI Agent: Address product defects and damaged shipping complaints.</li>
                  <li>Fraudulent Detection AI Agent: Investigate and resolve reported fraudulent transactions.</li>
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

          {/* Tools Section */}
          {open === 3 && (
          <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-0 mt-4">
            <div className="
              flex 
              flex-col
              max-sm:flex-row
              max-sm:flex-wrap 
              sm:flex-row 
              md:flex-wrap 
              lg:flex-row 
              lg:flex-wrap 
              xl:flex-row 
              xl:flex-wrap 
              justify-center 
              gap-4 
              items-center
            ">
              {cc_tools.map((tool, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center justify-center w-20 sm:w-24 md:w-28 lg:w-28 xl:w-28"
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="w-14 h-14 max-sm:w-8 max-sm:h-8 mx-auto mb-1 object-cover"
                  />
                  <p className="text-sm max-sm:text-[12px] font-winky text-gray-500 leading-tight">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        </div>



        {/* ----------- Project 4 ----------- */}
        <div
          ref={(el) => {
              projectRefs.current[4] = el;
            }}
          onClick={(e) => {
          e.stopPropagation();   // stop bubbling
          e.preventDefault();    // prevent accidental anchor jumps
          toggle(4);}}
          className="group block border-b border-gray-700 py-3 px-6 width-[150%] transition duration-300 bg-white hover:bg-gray-800 bg-opacity-100 cursor-pointer
          rounded-xl"
        >
          <div className="flex items-center gap-6">
            <img
              src={sn}
              alt="Smart Nest Logo"
              className="w-20 h-30 object-cover rounded-md max-sm:mt-4 lg:w-22 lg:h-12"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-2xl md:text-3xl max-sm:text-md max-sm:left-10 max-sm:absolute font-abel text-black group-hover:text-[#FFFFFF] group-hover:translate-x-2 transform transition duration-300">
                  Smart Nest
                </h3>
                <span className="text-gray-500 group-hover:text-gray-700 transition duration-300 max-sm:ml-16">
                  {open === 4 ? "−" : "→"}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-4 flex-wrap text-sm max-sm:mt-4">
                <span className="bg-gradient-to-r from-[#DE2D3A] to-[#799AC0] text-white py-1 px-3 rounded-full font-medium shadow-md max-sm:mt-[-7px] max-sm:px-2">
                  Full Stack Web App
                </span>
                <span className="text-gray-500 max-sm:text-[14px]  max-sm:mt-[-5px] text-[15px] font-lora">
                  Built Aug 2024 - Dec 2024
                </span>
              </div>

              <p className="mt-1 text-gray-500 text-[30px] text-sm max-sm:text-[13px] md:text-base font-lora leading-snug md:leading-normal lg:leading-relaxed">
                IOT MarketPlace Website with AI Assistance
              </p>

              {/* Buttons */}
              <div
                className="mt-4 flex gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  onClick={(e) => e.stopPropagation()}
                  href="https://github.com/Ssdsai/Smart-Nest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-600 transition"
                >
                  <img
                  src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                  alt="GitHub"
                  className="w-8 h-8 rounded-[5px] hover:scale-105 transition-transform"
                /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Accordion Content */}
          {open === 4 && (
            <div className="mt-6 md:flex md:gap-6">
              {/* Info Left */}
              <div className="md:w-1/2 hover:text-gray-500 font-lora">
                <p className="text-gray-500  mb-4">
                  An IoT-based marketplace website for smart home products, featuring multi-level user access, seamless order management, intelligent review analysis, and AI-powered product recommendations for a personalized shopping experience.
                </p>
                <ul className="text-sm text-gray-500  list-disc list-inside font-winky">
                  <li>Frontend built using ReactJS and styled with CSS3.</li>
                  <li>Backend developed with Java Servlets and deployed on Apache Tomcat.</li>
                  <li>MySQL used for user data and transactions; MongoDB for storing product reviews.</li>
                  <li>OpenAI embeddings + Elasticsearch for semantic review search and product recommendations.</li>
                  <li>AI-generated product data and reviews using LangChain and OpenAI APIs.</li>
                  <li>Flask + Docker used for image recognition and microservice-based recommendations.</li>
                </ul>
              </div>

              {/* Media Right */}
              {/* Media Right - Responsive Image Slider */}
              <div className="md:w-1/2 mt-4 md:mt-0">
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
                  {smartnestImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Smart Nest ${index}`}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                        index === currentSmartNest
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0"
                      }`}
                    />
                  ))}
                  {/* Navigation Buttons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSmartNest((prev) =>
                        prev === 0 ? smartnestImages.length - 1 : prev - 1
                      );
                    }}
                    className="absolute top-1/2 left-3 -translate-y-1/2 bg-white bg-opacity-80 text-black px-2 py-1 rounded-full shadow z-20 hover:bg-opacity-100"
                  >
                    ←
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSmartNest((prev) =>
                        prev === smartnestImages.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-white bg-opacity-80 text-black px-2 py-1 rounded-full shadow z-20 hover:bg-opacity-100"
                  >
                    →
                  </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-1 mt-2">
                  {smartnestImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === currentSmartNest ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tools Section */}
          {open === 4 && (
          <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-0 mt-4">
            <div className="
              flex 
              flex-col
              max-sm:flex-row
              max-sm:flex-wrap 
              sm:flex-row 
              md:flex-wrap 
              lg:flex-row 
              lg:flex-wrap 
              xl:flex-row 
              xl:flex-wrap 
              justify-center 
              gap-4 
              items-center
            ">
              {smartnest_tools.map((tool, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center justify-center w-20 sm:w-24 md:w-28 lg:w-28 xl:w-28"
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="w-14 h-14 max-sm:w-8 max-sm:h-8 mx-auto mb-1 object-cover"
                  />
                  <p className="text-sm max-sm:text-[12px] font-winky text-gray-500 leading-tight">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        </div>


        {/* ----------- Project 5 ----------- */}
        <div
          ref={(el) => {                  //added button just so that the as opened slides little below
            projectRefs.current[5] = el;  //added button just so that the as opened slides little below
          }}                              //added button just so that the as opened slides little below
          onClick={(e) => {
          e.stopPropagation();   // stop bubbling
          e.preventDefault();    // prevent accidental anchor jumps
          toggle(5);}}
          className="group block border-b border-gray-700 py-3 px-6 width-[150%] transition duration-300 bg-white hover:bg-gray-800 bg-opacity-100 cursor-pointer
          rounded-xl"
        >
          <div className="flex items-center gap-6">
            <img
              src={ccfd}
              alt="Credit Card Fraud Detection Logo"
              className="w-20 h-30 object-cover rounded-md max-sm:mt-4 lg:w-22 lg:h-14"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-2xl md:text-3xl max-sm:text-md max-sm:left-10 max-sm:absolute font-abel text-black group-hover:text-[#FFFFFF] group-hover:translate-x-2 transform transition duration-300">
                  Credit Card Fraud Detection
                </h3>
                <span className="text-gray-500 group-hover:text-gray-700 transition duration-300 max-sm:ml-16">
                  {open === 5 ? "−" : "→"}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-4 flex-wrap text-sm max-sm:mt-4">
                <span className="bg-gradient-to-r from-blue-700 to-[#111827] text-white py-1 px-3 rounded-full font-medium shadow-md max-sm:mt-[-7px] max-sm:px-2">
                  Machine Learning for Security
                </span>
                <span className="text-gray-500 max-sm:text-[14px]  max-sm:mt-[-5px] text-[15px] font-lora">
                  Built Sep 2023 - Nov 2023
                </span>
              </div>

              <p className="mt-1 text-gray-500 text-sm text-[30px] max-sm:text-[13px] md:text-base font-lora leading-snug md:leading-normal lg:leading-relaxed">
                Machine learning-based approach using neural networks to accurately detect credit card fraud in transactional data.
              </p>

              {/* Buttons */}
              <div
                className="mt-4 flex gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                
                <a
                  onClick={(e) => e.stopPropagation()}
                  href="https://github.com/Ssdsai/Credit-Card-Fraud-Detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-600 transition"
                >
                  <img
                  src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                  alt="GitHub"
                  className="w-8 h-8 rounded-[5px] hover:scale-105 transition-transform"
                /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Accordion Content */}
          {open === 5 && (
            <div className="mt-6 md:flex md:gap-6">
              {/* Info Left */}
              <div className="md:w-1/2 hover:text-gray-500 font-lora">
                <p className="text-gray-500  mb-4">
                  An intelligent fraud detection system built to distinguish between legitimate and fraudulent credit card transactions using neural networks.
                </p>
                <ul className="text-sm text-gray-500  list-disc list-inside font-winky">
                  <li>Utilized a balanced credit card transaction dataset with 550,000+ records (2023, Kaggle).</li>
                  <li>Applied Multi-Layer Perceptron (MLP) neural network to model non-linear fraud patterns.</li>
                  <li>Implemented dimensionality reduction techniques like PCA and UMAP for feature visualization and optimization.</li>
                  <li>Performed hyperparameter tuning (batch size, learning rate, layers) via grid search.</li>
                  <li>Compared MLP with logistic regression, SVM, and TensorFlow-based deep models.</li>
                  <li>Achieved up to 96.16% accuracy using the original dataset without over-preprocessing.</li>
                </ul>
              </div>

              {/* Media Right */}
              {/* Media Right - Responsive Image Slider */}
              <div className="md:w-1/2 mt-4 md:mt-0">
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
                  {ccfdImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Credit Card Fraud Detection ${index}`}
                      className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ${
                        index === currentCCFD
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0"
                      }`}
                    />
                  ))}
                  {/* Navigation Buttons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentCCFD((prev) =>
                        prev === 0 ? ccfdImages.length - 1 : prev - 1
                      );
                    }}
                    className="absolute top-1/2 left-3 -translate-y-1/2 bg-white bg-opacity-80 text-black px-2 py-1 rounded-full shadow z-20 hover:bg-opacity-100"
                  >
                    ←
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentCCFD((prev) =>
                        prev === ccfdImages.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-white bg-opacity-80 text-black px-2 py-1 rounded-full shadow z-20 hover:bg-opacity-100"
                  >
                    →
                  </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-1 mt-2">
                  {ccfdImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === currentCCFD ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tools Section */}
          {open === 5 && (
          <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-0 mt-4">
            <div className="
              flex 
              flex-col
              max-sm:flex-row
              max-sm:flex-wrap 
              sm:flex-row 
              md:flex-wrap 
              lg:flex-row 
              lg:flex-wrap 
              xl:flex-row 
              xl:flex-wrap 
              justify-center 
              gap-4 
              items-center
            ">
              {ccfd_tools.map((tool, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center justify-center w-20 sm:w-24 md:w-28 lg:w-28 xl:w-28"
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="w-14 h-14 max-sm:w-8 max-sm:h-8 mx-auto mb-1 object-cover"
                  />
                  <p className="text-sm max-sm:text-[12px] font-winky text-gray-500 leading-tight">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        </div>


        {/* ----------- Project 6 ----------- */}
        <div
          ref={(el) => {                  //added button just so that the as opened slides little below
            projectRefs.current[6] = el;  //added button just so that the as opened slides little below
          }}                              //added button just so that the as opened slides little below
          onClick={(e) => {
          e.stopPropagation();   // stop bubbling
          e.preventDefault();    // prevent accidental anchor jumps
          toggle(6);}}
          className="group block border-b border-gray-700 py-3 px-6 width-[150%] transition duration-300 bg-white hover:bg-gray-800 bg-opacity-100 cursor-pointer
          rounded-xl"
        >
          <div className="flex items-center gap-6">
            <img
              src={fit}
              alt="Fit Pulse Logo"
              className="w-20 h-30 object-cover rounded-md max-sm:mt-4 lg:w-22 lg:h-14"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-2xl md:text-3xl max-sm:text-md max-sm:left-10 max-sm:absolute font-abel text-black group-hover:text-[#FFFFFF] group-hover:translate-x-2 transform transition duration-300">
                  Fit Pulse
                </h3>
                <span className="text-gray-500 group-hover:text-gray-700 transition duration-300 max-sm:ml-16">
                  {open === 6 ? "−" : "→"}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-4 flex-wrap text-sm max-sm:mt-4">
                <span className="bg-gradient-to-r from-gray-500 to-[#111827] text-white py-1 px-3 rounded-full font-medium shadow-md max-sm:mt-[-7px] max-sm:px-2">
                  Full Stack Web App
                </span>
                <span className="text-gray-500 max-sm:text-[14px]  max-sm:mt-[-5px] text-[15px] font-lora">
                  Built Jan 2023 - June 2023
                </span>
              </div>

              <p className="mt-1 text-gray-500 text-[30px] text-sm max-sm:text-[13px] md:text-base font-lora leading-snug md:leading-normal lg:leading-relaxed">
                Fitness Services and Gym Website with Capgemini.
              </p>

              {/* Buttons */}
              <div
                className="mt-4 flex gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                
                <a
                  onClick={(e) => e.stopPropagation()}
                  href="https://github.com/Ssdsai/Fit-Pulse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-600 transition"
                >
                  <img
                  src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                  alt="GitHub"
                  className="w-8 h-8 rounded-[5px] hover:scale-105 transition-transform"
                /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Accordion Content */}
          {open === 6 && (
            <div className="mt-6 md:flex md:gap-6">
              {/* Info Left */}
              <div className="md:w-1/2 hover:text-gray-500 font-lora">
                <p className="text-gray-500  mb-4">
                  Fitness & Gym Booking Website with OTP Widget.
                </p>
                <ul className="text-sm text-gray-500  list-disc list-inside font-winky">
                  <li>Developed a full-stack MERN fitness platform with OTP-based login using Twilio.</li>
                  <li>Built a real-time gym booking system with location-based search using MongoDB Atlas & GeoJSON.</li>
                  <li>Created an exercise recommendation engine with tiered workout levels: Beginner to Pro.</li>
                  <li>Designed and optimized RESTful APIs for authentication, bookings, and personalized workout suggestions.</li>
                  <li>Improved frontend performance using React.js and Tailwind CSS with lazy loading and efficient rendering.</li>
                  <li>Project was assessed by Capgemini professionals through formal evaluations and interviews.</li>
                </ul>
              </div>

              {/* Media Right */}
              {/* Media Right - Responsive Image Slider */}
              <div className="md:w-1/2 mt-4 md:mt-0">
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
                  {fitImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Fit Pulse ${index}`}
                      className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ${
                        index === currentFP
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0"
                      }`}
                    />
                  ))}
                  {/* Navigation Buttons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentFP((prev) =>
                        prev === 0 ? fitImages.length - 1 : prev - 1
                      );
                    }}
                    className="absolute top-1/2 left-3 -translate-y-1/2 bg-white bg-opacity-80 text-black px-2 py-1 rounded-full shadow z-20 hover:bg-opacity-100"
                  >
                    ←
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentFP((prev) =>
                        prev === fitImages.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-white bg-opacity-80 text-black px-2 py-1 rounded-full shadow z-20 hover:bg-opacity-100"
                  >
                    →
                  </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-1 mt-2">
                  {fitImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === currentFP ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tools Section */}
          {open === 6 && (
          <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-0 mt-4">
            <div className="
              flex 
              flex-col
              max-sm:flex-row
              max-sm:flex-wrap 
              sm:flex-row 
              md:flex-wrap 
              lg:flex-row 
              lg:flex-wrap 
              xl:flex-row 
              xl:flex-wrap 
              justify-center 
              gap-4 
              items-center
            ">
              {fit_tools.map((tool, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center justify-center w-20 sm:w-24 md:w-28 lg:w-28 xl:w-28"
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="w-14 h-14 max-sm:w-8 max-sm:h-8 mx-auto mb-1 object-cover"
                  />
                  <p className="text-sm max-sm:text-[12px] font-winky text-gray-500 leading-tight">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        </div>



      </section>
    </div>
  );
}

export default Work;
