import React from "react";
import laptopImg from "../assets/images/homeImage.png";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../assets/resume_updated.pdf";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <section className="">
      <div
        className="w-full text-white flex flex-col md:flex-row md:items-center pb-24 mb-4 md:mb-14 pl-8 md:pl-12 lg:pl-40 lg:pr-20 pt-32"
        id="home"
      >
        <div className="w-full lg:w-1/2 pl-3 md:pl-4">
          <h2 className="font-bold text-2xl md:text-4xl xl:text-5xl mb-6 md:mb-10">
            Hi There!
          </h2>
          <h2 className="font-bold text-2xl md:text-4xl xl:text-5xl mb-6 md:mb-10">
            I'M <span style={{ color: "#C770F0" }}>HARISH PARTHASARATHY</span>
          </h2>
          <h2
            className="font-bold text-2xl md:text-4xl xl:text-5xl mb-6 md:mb-10"
            style={{ color: "#C770F0" }}
          >
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Full Stack Developer", "ML Engineer"],
              }}
            />
          </h2>
          <div className="w-1/2 flex justify-start md:justify-center truncate">
            <a
              href={pdf}
              target="_blank"
              download="Harish - Resume"
              rel="noopener noreferrer"
              className="flex gap-1 text-white rounded-md py-2 px-4 
            lg:py-2 md:px-8 lg:px-14 text-sm md:text-base lg:text-lg"
              style={{ backgroundColor: "#934CCEF3" }}
            >
              <AiOutlineDownload className="mt-1" />
              Download CV
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className="w-full pr-6 lg:pr-12"
            src={laptopImg}
            alt="Modern house model"
          />
        </div>
      </div>
      <div className="text-center text-white pb-16">
        <h1 className="font-semibold text-2xl md:text-4xl mb-4">FIND ME ON</h1>
        <p className="text-lg">
          Feel free to<span className="text-purple-500"> connect</span> with me
        </p>
        <div className="flex justify-center py-8 gap-8">
          <a
            href="https://x.com/harish_here_"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-purple-600 bg-white p-2 sm:p-4 text-2xl rounded-full"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/harish-parthasarathy/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-purple-600 bg-white  p-2 sm:p-4 text-2xl rounded-full"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_harish.here_"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-purple-600 bg-white  p-2 sm:p-4 text-2xl rounded-full"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/pPTPJ2vLD16juPM2/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-purple-600  bg-white p-2 sm:p-4 text-2xl rounded-full"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
}
