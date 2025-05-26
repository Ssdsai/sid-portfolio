import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import cagpemini from "./assets/experience/capgemini-.png";
import latrobe from "./assets/experience/latrobe.png";
import experience from "./assets/video/work.mp4"
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    company: 'Capgemini',
    logo: cagpemini,
    role: 'Software Developer',
    location: 'Bengaluru, India',
    duration: 'Jan 2023 – June 2023',
    description: 'Developed a full-stack fitness and gym platform adopting the MERN stack (MongoDB, Express.js, React.js, Node.js) with an OTP-based authentication system via Twilio API for secure user verification. Enhanced UI/UX with React.js and Tailwind CSS, deploying lazy loading and efficient rendering for a seamless experience. Collaborated in Agile teams to ensure high-quality, scalable code. Capgemini-assessed project, presented and demonstrated given project to 3 Capgemini professionals.',
    technologies: [
      { name: 'ReactJS', link: '' },
      { name: 'CSS3', link: '' },
      { name: 'MongoDB', link: '' },
      { name: 'ExpressJS', link: '' },
      { name: 'NodeJS', link: '' },
      { name: 'Twilio API', link: '' },
    ],
  },
  {
    company: 'La Trobe University, Melbourne, Australia',
    logo: latrobe,
    role: 'Research Intern',
    location: 'Remote',
    duration: 'July 2022 – June 2023',
    description: 'Integrated Python REST APIs on Raspberry Pi devices, providing real-time data collection and Prometheus for continuous monitoring of blockchain metrics, including transaction rates, storage usage, and network health. Built a centralized monitoring system with Grafana to visualize real-time statistics, network graphs, and key performance indicators, ensuring tracking of node performance with 95% uptime and real-time transaction throughput. Engineered a solution to visualize blockchain and consensus processes, refining node status, latency, and network performance, resulting in a 20% boost in efficiency. Executed Taiga Kanban for task management and milestones.',
    technologies: [
      { name: 'Prometheus', link: '' },
      { name: 'Grafana', link: '' },
    ],
  },
];

type ExperienceProps = {
  refProp: React.Ref<HTMLElement | null>;
};



const Experience = ({ refProp }: ExperienceProps) => {
  const { ref: inViewRef, inView: isInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  
  

  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ['0%', '100%']);

  return (
    // <div  ref={inViewRef} className={`transition-colors duration-1000 bg-transparent text-inherit`}>
    <section ref={refProp} data-scroll-section className="relative w-full  text-gray-900 py-20 px-4 sm:px-8 lg:px-20 ">
    //{/* <section
    //   ref={refProp}
    //   className={`relative w-full py-20 px-4 sm:px-8 lg:px-20 ${
    //     isInView ? "bg-black text-white" : "bg-white text-black"
    //   } transition-colors duration-1000`}
    // >*/}

<div className="mb-36 px-4 md:px-12 lg:px-20 w-full">
  {/* Container for both education blocks */}
  <div className="flex flex-col lg:flex-row gap-8 w-full">
    
    {/* Education 2 */}
    <div className="flex flex-col sm:flex-row items-center sm:items-start bg-white rounded-xl shadow-md p-6 w-full">
  {/* Image Left */}
  <img
    src="https://upload.wikimedia.org/wikipedia/en/9/96/Illinois_Institute_of_Technology_%28seal%29.svg"
    alt="Illinois Institute of Technology"
    className="w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6 mx-auto sm:mx-0"
  />

  {/* Info Right */}
  <div className="flex-1 text-center sm:text-left">
    <h1 className="text-2xl font-ancizar text-gray-800">Illinois Institute of Technology, Chicago, USA</h1>
    <p className="text-gray-700 font-lora text-md">Master's in Computer Science</p>
    <p className="text-gray-500 text-sm mt-1 font-lora">GPA: - </p>
    <p className="text-gray-500 text-sm font-lora">2023 - 2025</p>
    <p className="text-gray-800 mt-2 text-sm font-lora">
      Relevant Courses: Enterprise Web Applications, Machine Learning, Data Privacy & Security, Software Engineering
    </p>
  </div>
</div>


    {/* Education 1 */}
    <div className="flex flex-col sm:flex-row items-start bg-white rounded-xl shadow-md p-6 w-full">
      {/* Image Left */}
      <img
        src="https://facultytub.com/wp-content/uploads/2024/03/presidency-university-yelahanka-bangalore-universities-si0nhgmmkz.jpg"
        alt="Presidency University"
        className="w-32 h-32 max-sm:w-36 max-sm:h-36 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6 mx-auto sm:mx-0"
      />


      {/* Info Right */}
      <div className="flex-1">
        <h1 className="text-2xl font-ancizar text-gray-800">Presidency University, Bengaluru, India</h1>
        <p className="text-gray-700 font-lora text-md">Bachelors of Engineering in Computer Science</p>
        <p className="text-gray-500 text-sm mt-1 font-lora">GPA: 8.49 / 10</p>
        <p className="text-gray-500 text-sm font-lora">2019 - 2023</p>
        <p className="text-gray-800 mt-2 text-sm font-lora">
          Key Courses: Data Structures and Algorithms, DBMS, Operating Systems, Mobile Application Development, Object Oriented Programming
        </p>
      </div>
    </div>
  </div>
</div>




      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Side - Image */}
        <div className="hidden md:block md:col-span-1">
          <video
            src={experience}
                    autoPlay
                    loop
                    muted
                    playsInline
                  className="w-[210%] h-[40%] md:w-[190%] md:h-[20%] mt-[150px] ml-[-50px] md:ml-[10px] rounded-3xl shadow-2xl object-cover" />
        </div>

        {/* Right Side - Timeline */}
        <div ref={timelineRef} className="relative md:col-span-2 pl-6">
          <h2 className="text-5xl font-playfair text-sky-600 mb-16">Work Experience</h2>

          {/* Vertical Meteor Line */}
          <div className="absolute left-6 top-0 w-1 h-full">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-sky-500 via-sky-300 to-transparent rounded-full shadow-xl"
            />
          </div>

          {/* Timeline Cards */}
          <div className="relative border-l border-transparent">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-20 ml-10 relative flex items-start gap-4"
              >
                {/* Logo & Company */}
                <div className="absolute -left-20 top-0 flex flex-col items-center w-20">
                  <div className="w-16 h-16 bg-white rounded-full p-1 border-2 border-sky-500 shadow-md">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain rounded-full " />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 text-center font-medium">{exp.company}</span>
                </div>

                {/* Content */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition duration-300 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-2xl sm:text-3xl font-abel text-gray-800 tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm mt-1 sm:mt-0">
                      <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full font-semibold shadow-sm">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.05 4.05a7 7 0 019.9 9.9l-4.95 4.95-4.95-4.95a7 7 0 010-9.9z" />
                    </svg>
                    <span className="font-medium text-gray-700">{exp.location}</span>
                  </p>
                  <p className="mt-4 text-gray-700 font-sans-serif text-[17px] leading-relaxed">{exp.description}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {exp.technologies.map((tech, idx) => (
                      <a
                        key={idx}
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-sky-100 hover:bg-sky-200 text-sky-700 transition-colors text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm"
                      >
                        {tech.name}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    // </div>
  );
};

export default Experience;
