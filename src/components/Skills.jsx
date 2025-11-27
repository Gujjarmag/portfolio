export default function Skills() {
  const skills = [
    "React",
    "Node.js",
    "JavaScript",
    "Python",
    "Express.js",
    "PostgreSQL",
    "SQL Server",
    "Git",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
      <p className="text-gray-700 text-lg mb-8">
        Technologies and tools I work with:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-4 py-3 border border-gray-300 rounded-lg text-center shadow-sm bg-white hover:shadow-md transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
