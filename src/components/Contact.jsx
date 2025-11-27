import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      {/* <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
        Contact
      </h2>

      <p className="text-gray-700 text-lg mb-8 text-left">
        Feel free to reach out for collaboration, project inquiries, or
        internship opportunities.
      </p> */}

      <div className="flex items-center max-w-md border border-blue-300 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition">
        <FaEnvelope className="text-gray-700 text-2xl mr-4" />
        <a
          href="mailto:muneebke@gmail.com"
          className="text-gray-700 text-lg hover:text-black transition"
        >
          muneebke@gmail.com
        </a>
      </div>
    </section>
  );
}
