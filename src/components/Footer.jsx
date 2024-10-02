import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <section
      className="w-full flex flex-col md:flex-row justify-between items-center gap-2 py-4 text-white text-lg lg:text-xl md:px-8 lg:px-20 bg-opacity-60"
      style={{ backgroundColor: "rgba(10, 4, 22, 0.2)" }}
    >
      <div className="">Developed by Harish Parthasarathy</div>
      <div className="mb-2">Copyright © 2024 HP</div>
      <div className="flex gap-10 text-xl md:text-xl lg:text-2xl">
        <span>
          <FaFacebook />
        </span>
        <span>
          <FaGithub />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaTwitter />
        </span>
      </div>
    </section>
  );
}
