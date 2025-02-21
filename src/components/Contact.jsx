import { Link } from "react-router-dom";

function Contact() {
  return (
    <div id="Contact" className="h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="mt-4">Reach out for collaborations or inquiries.</p>

      {/* Link to About Page */}
      <Link to="/about">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
          Learn More About Me
        </button>
      </Link>
    </div>
  );
}

export default Contact;