// import React, { useState, FormEvent } from "react";
// import emailjs from "emailjs-com";

// const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
// const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setStatus("sending");
//     // Match EmailJS template parameters: subject, name, message, time
//     const templateParams = {
//       subject: formData.subject,
//       name: formData.name,
//       message: formData.message,
//       time: new Date().toLocaleString(),
//       email: formData.email,
//     };
//     try {
//       await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
//       setStatus("success");
//       setFormData({ name: "", email: "", subject: "", message: "" });
//     } catch (err) {
//       console.error("EmailJS send error:", err);
//       setStatus("error");
//     }
//   };

//   return (
//     <section className="relative bg-white py-20 px-4 sm:px-8 lg:px-20 -mt-32">
//       <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
//         <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Contact Me</h2>
//         <p className="text-center text-gray-500 mb-8">Have a project or idea? Let’s connect!</p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
//             />
//           </div>

//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             required
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
//           />

//           <textarea
//             name="message"
//             placeholder="Message"
//             rows={6}
//             required
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
//           />

//           <button
//             type="submit"
//             disabled={status === "sending"}
//             className="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:from-sky-600 hover:to-blue-600 transition"
//           >
//             {status === "sending" ? "Sending..." : "Send Message"}
//           </button>

//           {status === "success" && (
//             <p className="text-green-600 mt-2 text-center">Message sent successfully!</p>
//           )}
//           {status === "error" && (
//             <p className="text-red-600 mt-2 text-center">Failed to send, please try again.</p>
//           )}
//         </form>

//         <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center">
//           <div className="space-y-1 text-center sm:text-left">
//             <p>
//               <strong>Email:</strong>{" "}
//               <a href="mailto:youremail@example.com" className="text-sky-600 hover:underline">
//                 youremail@example.com
//               </a>
//             </p>
//             <p>
//               <strong>Phone:</strong>{" "}
//               <a href="tel:+1234567890" className="text-sky-600 hover:underline">
//                 +1 (234) 567-890
//               </a>
//             </p>
//           </div>
//           <div className="flex gap-6 mt-4 sm:mt-0 text-2xl text-gray-500">
//             <a
//               href="https://linkedin.com/in/yourprofile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-sky-700"
//             >
//               <img
//                 src="https://img.icons8.com/?size=100&id=nTY9sWZezkri&format=png&color=000000"
//                 alt="Linked In"
//                 className="w-8 h-8"
//               />
//             </a>
//             <a
//               href="https://github.com/yourprofile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-sky-700"
//             >
//               <img
//                 src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"
//                 alt="GitHub"
//                 className="w-8 h-8 rounded-[35px]"
//               />
//             </a>
//             <a
//               href="https://discord.com/users/yourprofile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-sky-700"
//             >
//               <img
//                 src="https://img.icons8.com/?size=100&id=jCIaYGMYhY9d&format=png&color=000000"
//                 alt="Discord"
//                 className="w-8 h-8 rounded-[35px]"
//               />
//             </a>
//           </div>
//         </div>
//       </div>

//       <footer className="mt-12 mb-[-40px] border-t pt-6 text-center text-sm text-gray-400">
//       <p>
//         &copy; 2025.{" "}
//         <a
//           href="https://yourportfolio.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:underline"
//         >
//           All rights reserved.
//         </a>{" "}
//         Sai Dhanush Soma
//       </p>
//       <h5>Version 1.1</h5>
//     </footer>
//     </section>

//   );
// }

import React, { useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import emailicon from "./assets/video/email-file.gif";
import phone from "./assets/video/phone.gif";
import resume from "./assets/video/resume.gif";
import location from "./assets/location.gif";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      subject: formData.subject,
      name: formData.name,
      message: formData.message,
      time: new Date().toLocaleString(),
      email: formData.email,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS send error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="relative bg-white py-20 px-4 sm:px-8 lg:px-20 -mt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-start items-start">
          <h2 className="text-4xl font-shadows text-[80px] text-gray-900 max-sm:text-[50px]">
            Get in Touch !
           <span className="flex flex-row">
             <img
                src="https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2021/01/19043815/Chicago-Bean-scaled.jpg"
                alt="Chicago"
                className="w-20 h-20  object-cover rounded-lg mt-8 sm:mb-0 sm:mr-6 mx-auto sm:mx-0"
              />

              <img
                  src={location}
                  alt="Location"
                  className="w-10 h-10 mt-12 hover:scale-125 transition-transform max-sm:ml-[10px]"
                />
              <p className="font-lora text-[30px] text-gray-600 mt-[50px] ml-[10px] max-sm:text-[18px]">
                Chicago, Illinois, USA
              </p>
           </span>
          </h2>

          <div className="mt-20 space-y-4 max-sm:space-y-1 text-gray-700 font-winky text-[30px]">
            <p>
            <span className="inline-flex items-center gap-1">
            <a href="mailto:saidhanushsoma@gmail.com"><img
                    src={emailicon}
                    alt="Email Gif"
                    className="
                            rounded-xl
                            w-8 h-8                /* base (mobile-first) */
                            sm:w-10 sm:h-10        /* small screens */
                            md:w-12 md:h-12        /* medium screens */
                            lg:w-14 lg:h-14  lg:mt-[-25px]      /* large screens */
                            xl:w-16 xl:h-16        /* extra-large screens */
                            2xl:w-20 2xl:h-20      /* 2xl screens */
                          "
                  /></a>
              <strong>Email:</strong>
              <br />
              <a
                href="mailto:saidhanushsoma@gmail.com"
                className="text-sky-600 hover:underline inline-flex gap-1 max-sm:text-[20px]"
              >
                
                 
                  saidhanushsoma@gmail.com
                
              </a>
              </span>
            </p>

            <p>
            <span className="inline-flex items-center gap-1">
            <a href="tel:+7739706599"><img
                    src={phone}
                    alt="Phone Gif"
                    className="
                            rounded-xl
                            w-8 h-8                /* base (mobile-first) */
                            sm:w-10 sm:h-10        /* small screens */
                            md:w-12 md:h-12        /* medium screens */
                            lg:w-14 lg:h-14  lg:mt-[-25px]      /* large screens */
                            xl:w-16 xl:h-16        /* extra-large screens */
                            2xl:w-20 2xl:h-20      /* 2xl screens */
                          "
                    
                  /></a>
              <strong>Phone:</strong>
              <br />
              <a
                href="tel:+7739706599"
                className="text-sky-600 hover:underline inline-flex gap-1 max-sm:text-[20px]"
              >
                
                 
                +1 (773) 970-6599
                
              </a>
              </span>
            </p>

            <p>
            <span className="inline-flex items-center gap-1">
            <a
                href="https://drive.google.com/file/d/1g6oDIuS4T98qFm8IUpFf74wiQUg81NWU/view?usp=sharing"
                className="text-sky-600 hover:underline inline-flex gap-1"
                target="_blank"
              >
            <img
                    src={resume}
                    alt="Resume Gif"
                    className="
                            rounded-xl
                            w-8 h-8                /* base (mobile-first) */
                            sm:w-10 sm:h-10        /* small screens */
                            md:w-12 md:h-12        /* medium screens */
                            lg:w-14 lg:h-14  lg:mt-[-15px]      /* large screens */
                            xl:w-16 xl:h-16        /* extra-large screens */
                            2xl:w-20 2xl:h-20      /* 2xl screens */
                          "
                  />
              
              <br />
              
                <strong>Resume</strong>
              </a>
              </span>
            </p>

           

          </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <form onSubmit={handleSubmit} className="space-y-6 w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border-b border-gray-400 focus:outline-none focus:border-sky-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border-b border-gray-400 focus:outline-none focus:border-sky-500"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border-b border-gray-400 focus:outline-none focus:border-sky-500"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border-b border-gray-400 focus:outline-none focus:border-sky-500"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-fit px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-playfair rounded-full shadow-md hover:from-sky-600 hover:to-blue-600 transition"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 mt-2">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-2">
              Failed to send, please try again.
            </p>
          )}
        </form>
      </div>

      {/* SOCIAL ICONS */}
      <div className="mt-16 flex justify-center gap-6 text-gray-500">
        <a
          href="https://www.linkedin.com/in/ssdhanush"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=nTY9sWZezkri&format=png&color=000000"
            alt="Linked In"
            className="w-8 h-8 hover:scale-110 transition-transform"
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
            className="w-8 h-8 hover:scale-110 transition-transform"
          />
        </a>
        <a
          href="https://drive.google.com/file/d/1g6oDIuS4T98qFm8IUpFf74wiQUg81NWU/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=pRezTnlZ3Oab&format=png&color=000000"
            alt="Email"
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
            className="w-8 h-8 hover:scale-110 transition-transform"
          />
        </a>
      </div>

      {/* FOOTER (unchanged) */}
      <footer className="mt-6 mb[40px] border-t pt-6 text-center text-sm text-gray-400">
        <p>
          &copy; 2025.{" "}
          <a
            href="https://saidhanush.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            All rights reserved.
          </a>{" "}
          Sai Dhanush Soma
        </p>
        <h5>Version 1.6</h5>
      </footer>
    </section>
  );
}
