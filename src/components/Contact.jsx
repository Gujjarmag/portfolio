export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact</h2>

      <p className="text-gray-700 text-lg mb-8">
        Feel free to reach out for collaboration, project inquiries, or
        internship opportunities.
      </p>

      <div className="space-y-4 text-lg text-gray-700">
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:muneebke@gmail.com"
            className="hover:text-black underline"
          >
            muneebke@gmail.com
          </a>
        </p>

        <p>
          <span className="font-semibold">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/muneeb-ahmad-01511742"
            target="_blank"
            className="hover:text-black underline"
          >
            linkedin.com/in/muneeb-ahmad-01511742
          </a>
        </p>

        <p>
          <span className="font-semibold">GitHub:</span>{" "}
          <a
            href="https://github.com/Gujjarmag"
            target="_blank"
            className="hover:text-black underline"
          >
            github.com/Gujjarmag
          </a>
        </p>
      </div>
    </section>
  );
}
