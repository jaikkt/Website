import { useState } from "react";
import { FaInstagram, FaYoutube, FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Gallery() {
  const videos = [
    "https://drive.google.com/file/d/1iiTVPksDpHHyYew3rvl5gLnTOXNbHw9t/preview",
    "https://drive.google.com/file/d/1L8z-dcC6TrZBJzH8DFZcIrfSP7MAaQoy/preview",
    "https://drive.google.com/file/d/1KQlVJr4Ei_jFCDXvvW6h4djG7hW3YzGG/preview",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto space-y-12 pt-32">
        
        {/* Header Section */}
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The Gallery is under construction. View my work here!
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://www.instagram.com/jaikktom/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
            <a
              href="https://www.youtube.com/@jaiktom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition-colors"
            >
              <FaYoutube className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Video Carousel Section */}
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="w-full relative pt-[56.25%] rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videos[currentVideo]}
              allow="autoplay"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            <FaArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            <FaArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;


