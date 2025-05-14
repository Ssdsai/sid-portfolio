import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    ]
  };

  useEffect(() => {
    const sections = gsap.utils.toArray(".stack-section");

    sections.forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
        x: 100,
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-black px-6 sm:px-10 md:px-16 py-24 flex items-center justify-center overflow-x-hidden border border-black">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">

        {/* Left: Tech Stack Section */}
        <motion.div className="flex flex-col gap-10">
          {Object.entries(techStacks).map(([section, icons], idx) => (
            <div key={idx} className="stack-section">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">{section}</h2>
              <div className="flex flex-wrap gap-4">
                {icons.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-1 w-20">
                    <div className="w-16 h-16 bg-white/10 p-2 rounded-full flex items-center justify-center shadow-md">
                      <img src={tech.src} alt={tech.name} className="w-10 h-10 object-contain" />
                    </div>
                    <span className="text-xs text-center text-black/80">{tech.name}</span>
                  </div>
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
          </div>

          <div className="pt-4">
            <a
              href="mailto:stevesid161201@gmail.com"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-open-sans py-2 px-6 rounded-full transition duration-300 shadow-md"
            >
              📧 Contact Me
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
