import { Link } from "react-router-dom";

function Contact() {
  return (
    <div id="Contact" className="h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="mt-4 text-center"> 
        Email: jaikktom@gmail.com <br />
        Reach out for collaborations or inquiries.
      </p>

      {/* Resume Link */}
      <a 
        href="https://drive.google.com/file/d/1oK96xdUyUpaE88FK3pRhneP1_52sCSKU/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
          View My Resume
        </button>
      </a>
    </div>
  );
}

export default Contact;