// // AboutMePage.tsx

// import React from 'react';
// import { motion } from 'framer-motion';

// export default function AboutMePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-4">
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center glass p-8 rounded-xl shadow-2xl border border-gray-700">

//         {/* Avatar Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex justify-center"
//         >
//           <div className="relative">
//             <img
//               src="https://avatars.githubusercontent.com/u/placeholder" // Replace with your image
//               alt="Sai Dhanush Soma"
//               className="rounded-full w-56 h-56 border-4 border-white shadow-lg"
//             />
//             <div className="absolute top-0 left-0 w-full h-full rounded-full animate-pulse bg-blue-500/20 blur-lg"></div>
//           </div>
//         </motion.div>

//         {/* Text Section */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl font-bold mb-4">Sai Dhanush Soma</h1>
//           <p className="text-lg text-gray-300 mb-4 leading-relaxed">
//             I'm a software engineer passionate about scalable architecture, LLMs, and building intelligent systems. With 1.5+ years of experience in full-stack development, I’ve engineered smart home apps, blockchain analytics, and AI-driven retail tools using technologies like React, Node, LangChain, and GPT-4.
//           </p>
//           <p className="text-md text-gray-400">
//             Currently pursuing my Master’s in Computer Science at Illinois Tech, I’m driven by solving real-world problems with clean code, great UI, and powerful backend logic.
//           </p>

//           <div className="mt-6">
//             <a
//               href="mailto:stevesid161201@gmail.com"
//               className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-md shadow-lg transition duration-300"
//             >
//               Contact Me
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


// AboutMePage.tsx

import React from 'react';
import { motion } from 'framer-motion';
import contact from "./assets/about-contact.png";

import hotjar from "./assets/about/hotjar.png";
import spline from "./assets/about/spline.png";
import invision from "./assets/about/invision.png";

export default function AboutMePage() {
  const techStacks = {
    "AI / ML": [
      { name: 'TensorFlow', src: 'https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000' },
      { name: 'PyTorch', src: 'https://img.icons8.com/?size=100&id=jH4BpkMnRrU5&format=png&color=000000' },
      { name: 'Numpy', src: 'https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000' },
      { name: 'Pandas', src: 'https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000' },
      { name: 'Jupyter', src: 'https://img.icons8.com/?size=100&id=J0SgMWzAxqFj&format=png&color=000000' },
      { name: 'Google Collab', src: 'https://img.icons8.com/?size=100&id=lOqoeP2Zy02f&format=png&color=000000' },
    ],
    "Frontend": [
      { name: 'React', src: 'https://img.icons8.com/?size=100&id=25Sjy8fKExYA&format=png&color=000000' },
      { name: 'TypeScript', src: 'https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000' },
      { name: 'JavaScript', src: 'https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000' },
      { name: 'Tailwind CSS', src: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000' },
      { name: 'HTML5', src: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
      { name: 'CSS3', src: 'https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000' },
      { name: 'Bootstrap', src: 'https://img.icons8.com/?size=100&id=g9mmSxx3SwAI&format=png&color=000000' },
    ],
    "Backend": [
      { name: 'Java', src: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000' },
      { name: 'Python', src: 'https://img.icons8.com/?size=100&id=W3gfKnMhfM6h&format=png&color=000000' },
      { name: 'Node.js', src: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000' },
      { name: 'Express', src: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000' },
      { name: 'MongoDB', src: 'https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000' },
      { name: 'PostgreSQL', src: 'https://img.icons8.com/?size=100&id=xF33DQdGyLDz&format=png&color=000000' },
      { name: 'MySQL', src: 'https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000' },
      { name: 'Docker', src: 'https://img.icons8.com/?size=100&id=22813&format=png&color=000000' },
    ],
    "UI/UX" : [
      {name: 'Figma', src: 'https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000'},
      {name: 'Hot Jar', src: hotjar},
      {name: 'Spline', src: spline},
      {name: 'Adobe XD', src: 'https://img.icons8.com/?size=100&id=4VVL78edhbW9&format=png&color=000000'},
      {name: 'Sketch', src: 'https://img.icons8.com/?size=100&id=37iEIiYKRoDs&format=png&color=000000'},
      {name: 'Photoshop', src: 'https://img.icons8.com/?size=100&id=dwfuFrQfNSOo&format=png&color=000000'},
      {name: 'InVision', src: invision},
    ],
    // "Other Tools" : [
    //   {name: 'Figma', src: 'https://img.icons8.com/?size=100&id=dwfuFrQfNSOo&format=png&color=000000'},
    //   {name: 'Hot Jar', src: hotjar},
    //   {name: 'Spline', src: spline},
    // ],
  };

  return (
    <div className="min-h-screen w-full bg-white text-black px-6 sm:px-10 md:px-16 mt-[-400px] lg:mt-[-400px] flex items-center justify-center ">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">

        {/* Left: Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10"
        >
          {Object.entries(techStacks).map(([section, icons], idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-winky text-[#2CCED4] mb-4">{section}</h2>
              <div className="flex flex-wrap gap-4">
                {icons.map((tech, i) => (
                  <motion.div
                  key={tech.name}
                  className="flex flex-col items-center gap-1 w-20"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                >
                  <div className="w-16 h-16 bg-white/10 p-2 rounded-full flex items-center justify-center shadow-md">
                    <img src={tech.src} alt={tech.name} className="w-10 h-10 object-contain" />
                  </div>
                  <span className="text-xs text-center font-winky text-black/80">{tech.name}</span>
                </motion.div>
                
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-playfair mb-2 leading-tight">Sai Dhanush Soma</h1>
            <h3 className="text-lg text-blue-400">Software Developer • Full Stack Developer • AI/ML Enthusiast</h3>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed font-lora">
          I'm Sai Dhanush Soma, a passionate Software Engineer with 1.5 years of hands-on development experience in building scalable, full-stack applications and optimizing system performance. With a strong foundation in data structures, algorithms, and system design, I thrive in fast-paced, agile environments and enjoy solving real-world problems through clean, efficient code.
<br></br>
My background spans research-driven blockchain monitoring systems and production-grade full-stack platforms using modern tech stacks like MERN, Java Servlets, LangChain, and Spring Boot. I bring a unique blend of backend efficiency, frontend finesse, and AI integration experience—most recently showcased in a smart home AI agent system using GPT-4, LangChain, and vector search with Elasticsearch.

Currently pursuing my Master’s in Computer Science at the Illinois Institute of Technology, I'm eager to contribute to innovative projects where I can apply my skills in cloud-native development, LLM-powered tools, and end-to-end system architecture
          </p>
          <p className="text-gray-600 text-sm font-lora">
            I'm currently pursuing my Master’s in Computer Science at Illinois Tech and always exploring
            new ideas to code into reality.
          </p>
          <div className="pt-4">
          <a
  href="mailto:stevesid161201@gmail.com"
  className="inline-block"
  style={{ WebkitTapHighlightColor: 'transparent' }}
>
  <img
    src={contact}
    alt="Contact Button"
    className="w-28 max-sm:w-52 max-sm:mt-[-20px] md:w-44 lg:w-64 xl:w-72 object-contain transition-transform duration-300 hover:scale-110"
  />
</a>






          </div>
        </motion.div>
      </div>
    </div>
  );
}
