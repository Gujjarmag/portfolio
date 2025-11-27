import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaReact, FaNodeJs, FaPython, FaGit } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMui,
} from "react-icons/si";

import bistroImg from "../assets/bistro-bliss.png";
import medievalImg from "../assets/medieval-mart.png";
import familyTreeImg from "../assets/family-tree.png";

export default function Projects() {
  const projects = [
    {
      name: "Bistro Bliss",
      tech: [
        <SiJavascript className="text-yellow-400" />,
        <SiTailwindcss className="text-teal-400" />,
      ],
      desc: "Converted Figma design into responsive website using HTML, CSS, Bootstrap.",
      github: "https://github.com/Gujjarmag/Figma-to-HTML-",
      live: "https://figma-to-html-beige.vercel.app/",
      img: bistroImg,
    },
    {
      name: "Medieval Mart",
      tech: [
        <FaReact className="text-blue-500" />,
        <SiMui className="text-blue-700" />,
        <SiTailwindcss className="text-teal-400" />,
        <FaNodeJs className="text-green-600" />,
      ],
      desc: "Responsive e-commerce app with reusable components and modern UI.",
      github: "https://github.com/Gujjarmag/react-ecommerce-capstone",
      live: "https://react-ecommerce-website-theta-eight.vercel.app/",
      img: medievalImg,
    },
    {
      name: "Family Tree",
      tech: [
        <FaReact className="text-blue-500" />,
        <FaNodeJs className="text-green-600" />,
        <SiExpress className="text-gray-800" />,
        <SiPostgresql className="text-blue-700" />,
      ],
      desc: "Full-stack app to visualize family relationships with Prisma and PostgreSQL.",
      github: "https://github.com/Gujjarmag/family-tree-frontend",
      live: "",
      img: familyTreeImg,
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-left">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray border border-blue-300 text-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            {project.img && (
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6 flex flex-col gap-4">
              {/* Project Title + Tech Icons */}
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <div className="flex gap-2 text-xl">
                  {project.tech.map((icon, idx) => (
                    <span key={idx}>{icon}</span>
                  ))}
                </div>
              </div>

              <p className="text-gray-300">{project.desc}</p>

              {/* Links */}
              <div className="flex gap-6 mt-2 text-gray-300 items-center">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaGithub /> GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
