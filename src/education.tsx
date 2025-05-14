"use client";

import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef } from "react";
import IllinoisTech from "./assets/education/IIT.png"

export default function Education() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  // Example education data
  const educationData = [
    {
      image: IllinoisTech,
      location: "Chicago, USA",
      duration: "Aug 2023 - May 2025",
      course: "Master's in Computer Science",
      major: "Artificial Intelligence",
      subjects: ["Machine Learning", "Deep Learning", "NLP", "Big Data"],
    },
    {
      image: "https://via.placeholder.com/400x400.png?text=College+2",
      location: "Bangalore, India",
      duration: "Aug 2019 - May 2023",
      course: "Bachelor's in Computer Engineering",
      major: "Software Engineering",
      subjects: ["Data Structures", "Algorithms", "Databases", "Web Dev"],
    },
    // ➔ Add more education entries here if you want
  ];

  return (
    <div id="education-container">
      <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>

      <motion.div ref={ref} style={{ maskImage }} className="education-scroll">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="education-image">
              <img src={edu.image} alt="Education" />
            </div>
            <div className="education-info">
              <div className="location-duration">
                <h3 className="location">{edu.location}</h3>
                <h4 className="duration">{edu.duration}</h4>
              </div>

              <div className="course-major">
                <h2 className="course">{edu.course}</h2>
                <h3 className="major">{edu.major}</h3>
              </div>

              <div className="subjects">
                {edu.subjects.map((subject, idx) => (
                  <p key={idx} className="subject-item">
                    {subject}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <StyleSheet />
    </div>
  );
}

// Animation helper
const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}

// Styles inside the same file
function StyleSheet() {
  return (
    <style>{`
      #education-container {
        width: 100vw;
        overflow: hidden;
        position: relative;
      }

      #progress {
        position: absolute;
        top: -65px;
        left: -15px;
        transform: rotate(-90deg);
      }

      .bg {
        stroke: #0b1011;
      }

      #progress circle {
        stroke-dashoffset: 0;
        stroke-width: 10%;
        fill: none;
      }

      .indicator {
        stroke: #0cdcf7;
      }

      .education-scroll {
      display: flex;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      height: calc(100vh - 150px);
      margin: 0;
      padding: 0;
    }

      .education-scroll::-webkit-scrollbar {
        height: 5px;
        background: #fff3;
      }

      .education-scroll::-webkit-scrollbar-thumb {
        background: #0cdcf7;
        border-radius: 10px;
      }

      .education-card {
      scroll-snap-align: start;
      flex: 0 0 100vw;
      height: calc(100vh - 150px);
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px; /* Internal padding only */
      box-sizing: border-box;
    }

      .education-image img {
        width: 400px;
        height: 400px;
        object-fit: cover;
        border-radius: 20px;
      }

      .education-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 500px;
        text-align: left;
      }

      .location {
        font-size: 24px;
        font-weight: 600;
      }

      .duration {
        font-size: 18px;
        color: #777;
      }

      .course {
        margin-top: 30px;
        font-size: 32px;
        font-weight: 700;
        color: #0d63f8;
      }

      .major {
        font-size: 24px;
        color: #555;
      }

      .subjects {
        margin-top: 20px;
      }

      .subject-item {
        font-size: 16px;
        color: #333;
        margin-bottom: 8px;
      }

      @media (max-width: 768px) {
        .education-card {
          flex-direction: column;
          text-align: center;
        }
        .education-image img {
          width: 300px;
          height: 300px;
        }
      }
    `}</style>
  );
}
