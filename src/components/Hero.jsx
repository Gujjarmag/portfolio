import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="w-full flex items-center justify-start py-10 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-8">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            src={profilePic}
            alt="Muneeb Ahmad"
            className="w-48 h-48 rounded-full object-cover border-2 border-gray-300 shadow-sm"
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
        <div className="text-left">
          <h1 className="text-5xl font-bold text-[#F8F8F8]">Muneeb Ahmad</h1>
          <p className="mt-4 text-xl text-[#99A1AF]">
            Web Developer | React, Node.js | Civil Engineer
          </p>
        </div>
      </div>
    </section>
  );
}
