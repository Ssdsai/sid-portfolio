import React from 'react';
import { motion } from 'framer-motion';
import contact from "./assets/about/about-contact.png";

import hotjar from "./assets/about/hotjar.png";
import spline from "./assets/about/spline.png";
import invision from "./assets/about/invision.png";
import langchain from "./assets/about/langchain.png";
// import langgraph from "./assets/about/langgraph.png";

export default function AboutMePage() {
  const techStacks = {
    "AI / ML": [
      { name: 'TensorFlow', src: 'https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000' },
      { name: 'PyTorch', src: 'https://img.icons8.com/?size=100&id=jH4BpkMnRrU5&format=png&color=000000' },
      { name: 'Scikit Learn', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'LangChain', src: langchain},
      { name: 'Jupyter NoteBook', src: 'https://img.icons8.com/?size=100&id=J0SgMWzAxqFj&format=png&color=000000' },
      { name: 'Power BI', src: 'https://img.icons8.com/?size=100&id=3sGOUDo9nJ4k&format=png&color=000000' },
      { name: 'Tableau', src: 'https://img.icons8.com/?size=100&id=9Kvi1p1F0tUo&format=png&color=000000'},
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
      { name: 'Flask', src: 'https://img.icons8.com/?size=100&id=TtXEs5SeYLG8&format=png&color=000000'},
      { name: 'Node.js', src: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000' },
      { name: 'Express', src: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000' },
      { name: 'Maven', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg'},
      { name: 'SpringBoot', src: 'https://img.icons8.com/?size=100&id=90519&format=png&color=000000'},
      { name: 'Hibernate', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg'},
      { name: 'MongoDB', src: 'https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000' },
      { name: 'PostgreSQL', src: 'https://img.icons8.com/?size=100&id=xF33DQdGyLDz&format=png&color=000000' },
      { name: 'MySQL', src: 'https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000' },
      { name: 'Docker', src: 'https://img.icons8.com/?size=100&id=22813&format=png&color=000000' },
      { name: 'Apache TomCat', src: 'https://img.icons8.com/?size=100&id=QFcVqyh6lBh6&format=png&color=000000'},
    ],
    "UI/UX" : [
      { name: 'Figma', src: 'https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000'},
      { name: 'Hot Jar', src: hotjar},
      { name: 'Spline', src: spline},
      { name: 'Adobe XD', src: 'https://img.icons8.com/?size=100&id=4VVL78edhbW9&format=png&color=000000'},
      { name: 'Sketch', src: 'https://img.icons8.com/?size=100&id=37iEIiYKRoDs&format=png&color=000000'},
      { name: 'Photoshop', src: 'https://img.icons8.com/?size=100&id=dwfuFrQfNSOo&format=png&color=000000'},
      { name: 'InVision', src: invision},
    ],
    "Other Tools" : [
      { name: 'Git', src: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000'},
      { name: 'Eclipse', src: 'https://img.icons8.com/?size=100&id=rPAHs7H1vriV&format=png&color=000000'},
      { name: 'IntelliJ', src: 'https://img.icons8.com/?size=100&id=61466&format=png&color=000000'},
      { name: 'Visual Studio Code', src: 'https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000'},
      { name: 'Prometheus', src: 'https://img.icons8.com/?size=100&id=Ei4ZhVQvIMHE&format=png&color=000000'},
      { name: 'Grafana', src: 'https://img.icons8.com/?size=100&id=6WbypxLnLs37&format=png&color=000000'},
    ]
 
  };

  return (
    <div className="min-h-screen w-full bg-white text-black px-6 sm:px-10 md:px-16  lg:mt-[-400px] flex items-center justify-center ">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-1 items-center  ">

        {/* Left: Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 ml-[-25px]"
        >
          {Object.entries(techStacks).map(([section, icons], idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-winky text-[#2CCED4] mb-1">{section}</h2>
              <div className="flex flex-wrap gap-1 max-sm:gap-1 max-sm:justify-center">
                {icons.map((tech, i) => (
                  <motion.div
                  key={tech.name}
                  className="flex flex-col items-center gap-1 w-18 max-sm:w-16"
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
          className="space-y-6 mt-[39px]"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-playfair mb-2 leading-tight">Sai Dhanush Soma</h1>
            <h3 className="text-2xl text-[#04ac7c] font-playfair">• Software Engineer •</h3>
                                                  {/* Software Developer • Full Stack Developer • AI/ML Enthusiast • UI/UX Designer */}
          </div>
          <p className="text-gray-500 text-sm leading-relaxed font-lora">
          I'm Sai Dhanush Soma, a passionate Software Engineer with 1.5 years of hands-on development experience in building scalable, full-stack applications and optimizing system performance. With a strong foundation in data structures, algorithms, and system design, I thrive in fast-paced, agile environments and enjoy solving real-world problems through clean, efficient code.
<br></br>
My background spans research-driven blockchain monitoring systems and production-grade full-stack platforms using modern tech stacks like MERN, Java Servlets, LangChain, and Spring Boot. I bring a unique blend of backend efficiency, frontend finesse, Intiutive UI/UXand AI integration experience—most recently showcased in a smart home AI agent system using GPT-4, LangChain, and vector search with Elasticsearch.

Recently I graduate from Illinois Institute of Technology, I'm eager to contribute to innovative projects where I can apply my skills in web apps, LLM-powered tools, and end-to-end system architecture
          </p>
          <p className="text-gray-600 text-sm font-lora">
            I recently completed my Master’s in Computer Science at Illinois Tech and looking for oppurtunities to explore
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
