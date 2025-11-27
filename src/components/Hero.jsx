import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 p-6">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-8">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            src={profilePic}
            alt="Muneeb Ahmad"
            className="w-48 h-48 rounded-full object-cover border-4 border-gray-300 shadow-lg"
          />

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-700 text-2xl">
            <a href="https://github.com/Gujjarmag" target="_blank">
              <FaGithub className="hover:text-black transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/muneeb-ahmad-01511742"
              target="_blank"
            >
              <FaLinkedin className="hover:text-blue-700 transition" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram className="hover:text-pink-600 transition" />
            </a>
          </div>
        </div>

        {/* Name & Tagline */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
            Muneeb Ahmad
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-700">
            Web Developer | React, Node.js | Civil Engineer
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
