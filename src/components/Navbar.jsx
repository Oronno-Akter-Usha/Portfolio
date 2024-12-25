import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="text-white flex justify-between items-center bg-gradient-to-r from-black via-gray-900 to-black px-6 py-4 drop-shadow-xl 
    backdrop-blur-md shadow-xl z-10 sticky top-0"
    >
      {/* Logo */}
      <div className="text-xl font-bold">Usha</div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
        {open ? <IoMdClose /> : <MdMenu />}
      </div>

      {/* Navigation Links */}
      <ul
        className={`md:flex gap-5 absolute md:static duration-500 w-full md:w-auto 
        ${
          open
            ? "bg-gradient-to-r from-black via-gray-900 to-black  top-16 left-0"
            : "-top-80"
        } px-6 py-4 md:py-0 drop-shadow-xl 
       backdrop-blur-md shadow-xl z-10 text-center space-y-5 md:space-y-0`}
      >
        <li>
          <a
            href="#about"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </a>
        </li>

        {/* Resume Button for Mobile */}
        <li className="md:hidden">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform">
            <a
              href="https://drive.google.com/file/d/14SRFYUMRILkHeKAEF5ayFWB8vetk6Q1U/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </a>
          </button>
        </li>
      </ul>

      {/* Resume Button for Desktop */}
      <button className="hidden md:block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform">
        <a
          href="https://drive.google.com/file/d/14SRFYUMRILkHeKAEF5ayFWB8vetk6Q1U/view?usp=drive_link"
          target="_blank"
        >
          Resume
        </a>
      </button>
    </nav>
  );
};

export default Navbar;
