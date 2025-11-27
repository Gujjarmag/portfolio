export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 p-6">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
        Muneeb Ahmad
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-600">
        Web Developer | React, Node.js | Civil Engineer
      </p>
      <div className="mt-8 flex gap-4">
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
    </section>
  );
}
