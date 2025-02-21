import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);

    const menuOpen = () => {
        setisOpen(!isOpen);
    }

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center 
    justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6
     text-white backdrop-blur-md md:justify-evenly">

        <Link to="/"  className= "bg-white bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
        onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>JKT</Link>

        <ul className="hidden md:flex gap-10">
        <Link 
            to="/" 
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
        >
            <li>Home</li>
        </Link>  

        <a href="#Tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Tech</li>
        </a>  

        <a href="#Projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Projects</li>
        </a>  

        <a href="#Contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Contact</li>
        </a>  

        </ul>
      
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100">
            <a href="https://www.instagram.com/jaikktom/" target="_blank" rel="noopener noreferrer">
                <BsInstagram/>
            </a>
        </li>

        <li
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <a href="https://www.linkedin.com/in/jaik-tom-75927a205/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin/>
            </a>
        </li>

        <li
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                <BsGithub/>
        </li>

        <li
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
            <a href="https://www.youtube.com/@jaiktom" target="_blank" rel="noopener noreferrer">
                <BsYoutube/>
            </a>
        </li>

      </ul>

      {isOpen ? (<BiX className= "block md:hidden text-4xl" onClick={menuOpen}/>) : (<BiMenu className= 
      "block md:hidden text-4xl" onClick={menuOpen}/>)
      }

      {isOpen && (
        <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-gray-800 
        bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>

        <ul className="flex flex-col gap-8">
        <Link 
            to="/" 
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
        >
            <li>Home</li>
        </Link>  

        <a href="#Tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Tech</li>
        </a>  

        <a href="#Projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Projects</li>
        </a>  

        <a href="#Contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Contact</li>
        </a>  
        </ul>

        <ul className="flex flex-wrap gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100">
            <a href="https://www.instagram.com/jaikktom/" target="_blank" rel="noopener noreferrer">
                <BsInstagram/>
            </a>
        </li>

        <li
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <a href="https://www.linkedin.com/in/jaik-tom-75927a205/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin/>
            </a>
        </li>

        <li
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                <BsGithub/>
        </li>

        <li
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
            <a href="https://www.youtube.com/@jaiktom" target="_blank" rel="noopener noreferrer">
                <BsYoutube/>
            </a>
        </li>
        </ul>

        </div>

      )}

    </nav>
  )
}

export default Navbar
