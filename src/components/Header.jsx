import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

export default function Header() {
  const navRef = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="">
      <div
        className="z-[9999] fixed w-full flex md:gap-16 xl:gap-60 items-center py-4 
        xl:py-6 bg-transparent bg-opacity-60
       px-6 md:pl-10 xl:pl-44"
      >
        <Link to="">
          <h2
            className="font-bold max-w-3xl text-4xl xl:text-5xl"
            style={{
              color: "#C770F0",
            }}
          >
            HP
          </h2>
        </Link>
        <button
          className="absolute top-4 right-4 text-3xl p-1 cursor-pointer bg-transparent border-none outline-none md:hidden"
          style={{ color: "#C770F0" }}
          onClick={toggleMobileMenu}
        >
          <FaBars />
        </button>

        {/* Desktop navigation */}
        <nav
          ref={navRef}
          className="hidden md:flex md:gap-8 mt-1 lg:gap-14 text-xl lg:text-2xl"
        >
          <Link to="" offset={-100} duration={500}>
            <li
              className="list-none text-white flex gap-2 cursor-pointer decoration-4 hover:underline hover:underline-offset-8"
              style={{ textDecorationColor: "#C770F0" }}
            >
              <AiOutlineHome className="mt-1" />
              Home
            </li>
          </Link>
          <Link to="about" offset={-100} duration={500}>
            <li
              className="list-none text-white flex gap-2 cursor-pointer decoration-4 hover:underline hover:underline-offset-8"
              style={{ textDecorationColor: "#C770F0" }}
            >
              <AiOutlineUser className="mt-1" />
              About
            </li>
          </Link>
          <Link to="projects" offset={-100} duration={500}>
            <li
              className="list-none text-white flex gap-2 cursor-pointer decoration-4  hover:underline hover:underline-offset-8"
              style={{ textDecorationColor: "#C770F0" }}
            >
              <AiOutlineFundProjectionScreen className="mt-1" />
              Projects
            </li>
          </Link>
          <a
            href="https://github.com/harish201105"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 px-6 py-2 rounded text-white"
            style={{ backgroundColor: "#934CCEF3" }}
          >
            <CgGitFork />
            <AiFillStar />
          </a>
        </nav>

        <nav
          ref={navRef}
          className={`absolute top-0 left-0 overflow-auto w-full text-white font-semibold flex flex-col justify-center px-2 md:px-4 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          style={{ backgroundColor: "#181a27" }}
        >
          <div
            className="flex justify-between pt-4 pb-2 px-10 mb-4"
            style={{ color: "#C770F0" }}
          >
            <Link to="">
              <h2 className="font-bold text-4xl">HP</h2>
            </Link>
            <FaTimes className="mt-1 text-4xl" onClick={handleCloseMenu} />
          </div>
          <Link to="" offset={-100} duration={500}>
            <li
              className="list-none flex justify-center my-3 gap-1 text-xl"
              onClick={handleCloseMenu}
            >
              <AiOutlineHome className="mt-1" />
              Home
            </li>
          </Link>
          <Link to="about" offset={-100} duration={500}>
            <li
              className="list-none flex justify-center my-3 gap-1 text-xl"
              onClick={handleCloseMenu}
            >
              <AiOutlineUser className="mt-1" />
              About
            </li>
          </Link>
          <Link to="projects" offset={-100} duration={500}>
            <li
              className="list-none flex justify-center my-3 gap-1 text-xl"
              onClick={handleCloseMenu}
            >
              <AiOutlineFundProjectionScreen className="mt-1" />
              Projects
            </li>
          </Link>
          <div className="flex justify-center my-3 pb-4">
            <a
              href="https://github.com/harish201105"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center gap-2 px-4 py-2 rounded text-white max-w-max"
              style={{ backgroundColor: "#934CCEF3" }}
            >
              <CgGitFork />
              <AiFillStar />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
