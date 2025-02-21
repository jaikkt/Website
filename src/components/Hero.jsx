import {motion} from "framer-motion";
import image from "../assets/TEXT.jpeg"

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">

        <motion.div
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay: 0.2}}
        >
          <img  src={image} 
            alt="" 
            className="w-[300px] cursor-pointer rounded-full hover:scale-105 transition-all duration-300"
            />
        </motion.div>

        <div className="flex max-w-[600px] flex-col items-center 
        justify-center gap-3 text-center">
          <h1 className="text-5xl font-light md:text-7xl"> Jaik Tom</h1>
          <h3 className="text-2xl font-light md:text-3xl">Software Developer</h3>
          <p className="text-lg">
            I'm a software developer with a passion for building web applications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero