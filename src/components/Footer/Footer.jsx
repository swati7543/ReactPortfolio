import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl bg-clip-text text-transparent font-semibold bg-gradient-to-r from-cyan-400 to-blue-500">Swati Kumari</h2>
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", path: "/about" },
            { name: "Skills", path: "/skills" },
            { name: "Projects", path: "/project" },  
            { name: "Education", path: "/education" },
            { name: "Certification", path: "/certification" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </Link>
          ))}
        </nav>


        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook /> },
            { icon: <FaTwitter /> },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/swati-kumari-59b380278/" },
            { icon: <FaInstagram /> },
            { icon: <FaYoutube /> },

          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Swati Kumari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;