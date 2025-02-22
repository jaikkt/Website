import { FaInstagram, FaYoutube } from 'react-icons/fa';

function Gallery() {
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

        {/* Video Section */}
        <div className="w-full relative pt-[56.25%] rounded-lg overflow-hidden shadow-2xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://drive.google.com/file/d/1iiTVPksDpHHyYew3rvl5gLnTOXNbHw9t/preview"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;