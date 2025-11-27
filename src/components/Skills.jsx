import { FaReact, FaNodeJs, FaPython, FaGit } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "Git", icon: <FaGit className="text-orange-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Skills</h2>
      <p className="text-gray-700 text-lg mb-8">
        Technologies and tools I work with:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center px-4 py-6 border border-blue-300 rounded-lg shadow-sm bg-gray hover:shadow-md transition"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <span className="text-gray-700 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
