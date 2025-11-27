import bistroImg from "../assets/bistro-bliss.png";
import medievalImg from "../assets/medieval-mart.png";
import familyTreeImg from "../assets/family-tree.png";

export default function Projects() {
  const projects = [
    {
      name: "Bistro Bliss - Food Website (Figma → Web)",
      tech: "HTML, CSS, Bootstrap",
      desc: "Converted a Figma UI design into a fully responsive website using HTML, CSS, and Bootstrap while ensuring pixel-perfect accuracy and a consistent modern layout.",
      github: "https://github.com/Gujjarmag/Figma-to-HTML-",
      live: "https://figma-to-html-beige.vercel.app/",
      img: bistroImg,
    },
    {
      name: "Medieval Mart - React E-Commerce Website",
      tech: "React, Redux Toolkit, Material UI (MUI), Tailwind CSS",
      desc: "Built a responsive e-commerce application with reusable UI components, efficient state management, and a modern shopping interface.",
      github: "https://github.com/Gujjarmag/react-ecommerce-capstone",
      live: "https://react-ecommerce-website-theta-eight.vercel.app/",
      img: medievalImg,
    },
    {
      name: "Family Tree Web-App",
      tech: "React, Node.js, Express, Prisma, PostgreSQL",
      desc: "Developed a full-stack web application to visualize family relationships using Prisma ORM for schema design and PostgreSQL for relational data management.",
      github: "https://github.com/Gujjarmag/family-tree-frontend",
      backend: "https://github.com/Gujjarmag/family-tree-backend",
      img: familyTreeImg,
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 italic mb-3">{project.tech}</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 border border-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 border border-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition"
                  >
                    Live Demo
                  </a>
                )}
                {project.backend && (
                  <a
                    href={project.backend}
                    target="_blank"
                    className="px-4 py-2 border border-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition"
                  >
                    Backend Repo
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
