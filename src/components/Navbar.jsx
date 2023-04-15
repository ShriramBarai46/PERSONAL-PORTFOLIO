import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si'
import Logo from "../assets/logo2.png";
// import CV from '../assets/Shriram.Barai.pdf'

import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4   bg-[#0a192f] text-gray-300">
      <div>
        <a href="/">
          <img src={Logo} className="rounded-full " alt="Logo Image" style={{ width: "60px" }} />
        </a>
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500} >
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} >
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} >
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} >
            Contact
          </Link>
        </li>
      </ul>


      {/* Hamburger */}

      <div onClick={handleClick} className="md:hidden z-10">
        {/* <FaBars/> */}
        {!nav ? <FaBars /> : <FaTimes />}
      </div>


      {/* Mobile menu */}


      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center hover:text-pink-300"}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl ">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>


      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-index: 50;">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-700">
            <a className="flex justify-between item-center w-full text-gray-300" href="https://www.linkedin.com/in/shriram-kumar-barai-431a84149/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-slate-100">
            <a className="flex justify-between item-center text-black w-full" href="https://github.com/ShriramBarai46">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-red-500">
            <a className="flex justify-between item-center w-full text-gray-300" href="mailto:shrirambarai46@gmail.com">
              Email <SiGmail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-slate-100">
            <a className="flex justify-between item-center w-full text-black" target="_blank" href="https://drive.google.com/file/d/1dfEdWGQCvXjfpv4i7C3F3-EXc8wF6vpi/view?ts=64359db2" >
              Resume <BsFillPersonLinesFill size={30} />
            </a>

            {/* <a target="_blank" href="https://drive.google.com/file/d/1rZiXl562q7aVyk1kJ2nO85YBAq8ixTiw/view">Resume</a> */}
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
