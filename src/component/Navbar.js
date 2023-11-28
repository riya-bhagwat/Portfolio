import React, { useState } from 'react'
import Logo from '.././assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll/modules';
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const clickNav = () => {
    setNav(!nav);
  }
  return (

    <div className="fixed w-full flex justify-between h-[80px] items-center px-4 bg-[#1f1f1f] text-gray-50 ">
      <img src={Logo} alt="Logo" style={{ width: '50px' }} />
      {/* menu */}
      <ul className='hidden md:flex  font-bold '>
        <li>
          <Link to='home' duration={500} smooth={true}>
            Home
          </Link>
        </li>
        <li><Link to='about' duration={500} smooth={true}>
          About
        </Link></li>
        <li><Link to='skills' duration={500} smooth={true}>
          Skills
        </Link></li>
        <li><Link to='project' duration={500} smooth={true}>
          Projects
        </Link></li>
        <li><Link to='contact' duration={500} smooth={true}>
          Contact
        </Link></li>
      </ul>
      {/* Humburger */}
      <div onClick={clickNav} className='md:hidden z-20'>
        {nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>
      {/* MobileMenu */}
      <ul className={!nav ? "absolute top-0 left-0 w-full h-screen flex flex-col bg-[#0a192f] justify-center items-center" : "hidden"}>
        <li  className="py-4 text-5xl"> <Link onClick={clickNav} to='home' duration={500} smooth={true}>
          Home
        </Link></li>
        <li  className="py-4 text-5xl"><Link onClick={clickNav} to='about' duration={500} smooth={true}>
          About
        </Link></li>
        <li  className="py-4 text-5xl"><Link onClick={clickNav} to='skills' duration={500} smooth={true}>
          Skills
        </Link></li>
        <li  className="py-4 text-5xl"><Link onClick={clickNav} to='project' duration={500} smooth={true}>
          Projects
        </Link></li>
        <li  className="py-4 text-5xl"><Link onClick={clickNav} to='contact' duration={500} smooth={true}>
          Contact
        </Link></li>
      </ul>
      {/* social icons */}
      <div className="hidden left-0 top-[35%] lg:flex flex-col fixed">
        <ul>
          <li className="ml-[-100px] hover:ml-[-10px] flex flex-col duration-300 justify-center items-center w-[160px] h-[60px] bg-blue-500 ">
            <a className="flex justify-between w-full items-center" href="https://www.linkedin.com/in/riya-bhagwat-0b1b9421b/ " target="_blank" rel="noreferrer">Linkedin <FaLinkedin size={30} /></a>
          </li>
          <li className="ml-[-100px] hover:ml-[-10px] flex flex-col duration-300 justify-center items-center w-[160px] h-[60px] bg-[#333333] ">
            <a className="flex justify-between w-full items-center" href="https://github.com/riya-bhagwat" target="_blank" rel="noreferrer">GitHub <FaGithub size={30} /></a>
          </li>
          <li className="ml-[-100px] hover:ml-[-10px] flex flex-col duration-300 justify-center items-center w-[160px] h-[60px] bg-[#6fc2b0] ">
            <a className="flex justify-between w-full items-center" href="mailto:riyabhagwat08@gmail.com" target="_blank" rel="noreferrer">Email <HiOutlineMail size={30} /></a>
          </li>
          <li className="ml-[-100px] hover:ml-[-10px] flex flex-col duration-300 justify-center items-center w-[160px] h-[60px] bg-[#565f69] ">
            <a className="flex justify-between w-full items-center" href="/" target="_blank" rel="noreferrer">Resume <BsFillPersonLinesFill size={30} /></a>
          </li>
        </ul>
      </div>
    </div>



  )
}

export default Navbar