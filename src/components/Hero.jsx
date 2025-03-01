import { motion } from "framer-motion";
import bgk from "../assets/bgk.png";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <div 
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-16 md:py-24"
    >
      <div className="flex flex-col items-center justify-center w-full relative">
        {/* Background Image Container */}
        <motion.div className="w-full overflow-hidden rounded-lg shadow-lg">
          <img
            src={bgk}
            alt="Background"
            className="w-full object-cover h-56 sm:h-64 md:h-80 lg:h-96 xl:h-auto"
          />
        </motion.div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl sm:text-6xl md:text-8xl font-light akira-font whitespace-nowrap">
            Jaik Tom
          </h1>
          
          <div className="flex gap-4 sm:gap-6 md:gap-10 lg:gap-16 mt-4 sm:mt-6 md:mt-8">
            <button
              onClick={() => {
                document.querySelector('#About').scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-black bg-opacity-20 text-white text-opacity-70
                px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 lg:px-6
                text-xs sm:text-xs md:text-sm lg:text-base
                rounded-md md:rounded-lg
                hover:bg-opacity-90 hover:text-opacity-100 transition-all"
            >
              About
            </button>
            
            <button
              onClick={() => navigate('/gallery')}
              className="bg-black bg-opacity-20 text-white text-opacity-70
                px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 lg:px-6
                text-xs sm:text-xs md:text-sm lg:text-base
                rounded-md md:rounded-lg
                hover:bg-opacity-90 hover:text-opacity-100 transition-all"
            >
              Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;