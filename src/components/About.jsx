import { useState } from 'react';
import { motion } from "framer-motion";
import { BiLogoAdobe, BiLogoJava, BiLogoPython, BiMoviePlay } from "react-icons/bi";
import profileImage from "../assets/Suit.jpg";

const BadgeShine = ({ text }) => {
  return (
    <span className="inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-4 py-2 text-sm font-medium text-gray-300">
      {text}
    </span>
  );
};

const Tech = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="About" className="flex min-h-[80vh] w-full flex-col items-center justify-center gap-12 md:gap-20 py-16">
      <motion.h1
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-light text-white md:text-6xl drop-shadow-[0_0_0.2rem_#ffffff70]"
      >
        About Me
      </motion.h1>

      {/* Card and Text Container */}
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        
        {/* Card Container */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-start"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div 
            className="w-72 h-96 md:w-80 md:h-[28rem] cursor-pointer"
            style={{ perspective: "1000px" }}
            onClick={handleFlip}
          >
            <motion.div
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Front of card */}
              <motion.div 
                className="absolute w-full h-full rounded-xl shadow-xl overflow-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={profileImage}
                  alt="Jaik Tom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 flex items-end p-6">
                  <p className="text-white font-semibold text-md opacity-50">Click to flip</p>
                </div>
              </motion.div>
              
              {/* Back of card */}
              <motion.div 
                className="absolute w-full h-full bg-black rounded-xl shadow-xl overflow-hidden p-6 text-white flex flex-col justify-center"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                <h3 className="text-2xl font-bold mb-4">Title</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Software Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>UI/UX Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Fintech</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Filmmaking</span>
                  </li>
                </ul>
                <p className="mt-auto text-sm opacity-80">Click</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Text content */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Jaik Kuruvila Tom</h3>
          <p className="mb-6 opacity-90">
            I am a Sophmore at Virginia Tech majoring in Computer Science 
            and minoring in Economics. With experties in various multidisciplinary
            fields, I am always looking for new challenges and opportunities to 
            learn and grow.
          </p>
          <p className="mb-6 opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos officia 
            corrupti aspernatur. Aliquam atque esse ducimus laboriosam. Dolores iure atque 
            sed saepe esse corporis facilis. Facilis excepturi incidunt aliquid?
          </p>
          
          {/* Animated Badges */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <BadgeShine text="Software Development" />
            <BadgeShine text="UI/UX Design" />
            <BadgeShine text="Fintech" />
            <BadgeShine text="Filmmaking" />
          </div>

          {/* Tech Icons - Now positioned right below the badges */}
          <motion.div 
            className="w-full mt-6 md:mt-8 flex flex-wrap items-center justify-center md:justify-between"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div transition={{ duration: 0.5, delay: 0.7 }}>
              <BiLogoAdobe className="cursor-pointer text-[50px] text-red-600 transition-all duration-300 hover:-translate-y-2 sm:text-[60px] md:text-[70px] drop-shadow-[0_0_6px_rgba(220,38,38,0.8)]" />
            </motion.div>
            <motion.div transition={{ duration: 0.5, delay: 0.8 }}>
              <BiLogoPython className="cursor-pointer text-[50px] text-blue-600 transition-all duration-300 hover:-translate-y-2 sm:text-[60px] md:text-[70px] drop-shadow-[0_0_6px_rgba(37,99,235,0.8)]" />
            </motion.div>
            <motion.div transition={{ duration: 0.5, delay: 0.9 }}>
              <BiMoviePlay className="cursor-pointer text-[50px] text-purple-700 transition-all duration-300 hover:-translate-y-2 sm:text-[60px] md:text-[70px] drop-shadow-[0_0_6px_rgba(147,51,234,0.8)]" />
            </motion.div>
            <motion.div transition={{ duration: 0.5, delay: 1.0 }}>
              <BiLogoJava className="cursor-pointer text-[50px] text-sky-600 transition-all duration-300 hover:-translate-y-2 sm:text-[60px] md:text-[70px] drop-shadow-[0_0_6px_rgba(2,132,199,0.8)]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
