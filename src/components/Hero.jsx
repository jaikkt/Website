import {motion} from "framer-motion";
import image from "../assets/TEXT.jpeg"
import bgk from "../assets/bgk.png"
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div id="home" className="px-8 flex min-h-[1vh] md:min-h-[90vh] w-full flex-col items-center py-32 md:py-30 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white relative">
        <motion.div>
          <img 
            src={bgk} 
            alt="Background" 
            className="flex flex-wrap w-full max-w-[800px] md:max-w-[2000px] object-cover rounded-lg"
          />
        </motion.div>

        <div className="flex max-w-[600px] flex-col items-center 
        justify-center gap-3 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%]">
          <h1 className="text-[8vw] font-light akira-font whitespace-nowrap">Jaik Tom</h1>
          
          <div className="flex gap-10 md:gap-20 -mt-5 -md:-8 ld:-mt-8">
            <button 
              onClick={() => {
                document.querySelector('#About').scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-black bg-opacity-20 text-white text-opacity-60 
              px-2 py-1 md:px-5 md:py-1 lg:px-8 lg:py-3 rounded-md md:rounded-xl hover:bg-opacity-90 hover:text-opacity-100 
              transition-all text-sm md:text-lg lg:text-xl">
              About
            </button>
            <button 
              onClick={() => navigate('/gallery')}
              className="bg-black bg-opacity-20 text-white text-opacity-60 
              px-2 py-1 md:px-5 md:py-1 lg:px-8 lg:py-3 rounded-md md:rounded-xl hover:bg-opacity-90 hover:text-opacity-100 
              transition-all text-sm md:text-lg lg:text-xl">
              Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero