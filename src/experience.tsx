import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    company: 'AlgoAce',
    logo: '/images/algoace.png',
    role: 'React Native Developer',
    location: 'Bengaluru, India',
    duration: 'Jan 2023 – Present',
    description: 'Developed cross-platform mobile applications using React Native, enhancing user engagement by 25%.',
    technologies: [
      { name: 'React Native', link: 'https://reactnative.dev/' },
      { name: 'Redux', link: 'https://redux.js.org/' },
      { name: 'Firebase', link: 'https://firebase.google.com/' },
    ],
  },
  {
    company: 'Freelance',
    logo: '/images/freelance.png',
    role: 'Full Stack Developer',
    location: 'Remote',
    duration: 'Jun 2021 – Dec 2022',
    description: 'Delivered custom web solutions for clients across various industries, focusing on performance and scalability.',
    technologies: [
      { name: 'MERN Stack', link: 'https://www.mongodb.com/mern-stack' },
      { name: 'AWS', link: 'https://aws.amazon.com/' },
      { name: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
    ],
  },
];

const Experience = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="relative w-full bg-black text-gray-900 py-20 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Side - Image */}
        <div className="hidden md:block md:col-span-1">
          <img src="/images/space-meteor.png" alt="Meteor" className="w-full h-auto rounded-3xl shadow-2xl object-cover" />
        </div>

        {/* Right Side - Timeline */}
        <div ref={timelineRef} className="relative md:col-span-2 pl-6">
          <h2 className="text-5xl font-bold text-sky-600 mb-16">Work Experience</h2>

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
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain rounded-full" />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 text-center font-medium">{exp.company}</span>
                </div>

                {/* Content */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition duration-300 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 tracking-tight">
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
                  <p className="mt-4 text-gray-700 leading-relaxed">{exp.description}</p>
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
  );
};

export default Experience;
