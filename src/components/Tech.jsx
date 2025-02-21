import { BiLogoAdobe, BiLogoApple, BiLogoJava, BiLogoPython, BiLogoTypescript, BiMoviePlay } from "react-icons/bi"
import {motion} from "framer-motion"

const Tech = () => {

  const variants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0},
  }

  return (
    <div id="Tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
        
        <motion.h1 
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5}}
        className="text-center text-4xl font-light text-white md:text-6xl">
          Specialized
        </motion.h1>

        <div className="flex flex-wrap items-center justify-center gap-10 p-5">
          <motion.div variants={variants}
          initial="hidden"
          animate="visible"
          transition={{duration: 0.5}}>
            <BiLogoAdobe className="cursor-pointer text-[80px] text-red-600 transition-all duration-300 
            hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
          </motion.div>

          <motion.div variants={variants}
          initial="hidden"
          animate="visible"
          transition={{duration: 0.5}}>
            <BiLogoPython className="cursor-pointer text-[80px] text-blue-600 transition-all duration-300 
            hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
          </motion.div>

          <motion.div variants={variants}
          initial="hidden"
          animate="visible"
          transition={{duration: 0.5}}>
            <BiMoviePlay className="cursor-pointer text-[80px] text-purple-600 transition-all duration-300 
            hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
          </motion.div>

          <motion.div variants={variants}
          initial="hidden"
          animate="visible"
          transition={{duration: 0.5}}>
            <BiLogoJava className="cursor-pointer text-[80px] text-sky-600 transition-all duration-300 
            hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
          </motion.div>
          

        </div>
    </div>
  )
}

export default Tech
