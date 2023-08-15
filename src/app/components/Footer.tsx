import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="p-3 h-12 flex flex-col items-center gap-4 text-gray-500"
      // style={{ color: "var(--darker-green)" }}
    >
      <div className="flex items-center gap-5 text-xl">
        <a href="https://www.facebook.com/Ausbakelia" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/ausbakelia" target="_blank">
          <FaInstagram />
        </a>
      </div>

      <span>© 2022, Ausbakelia Café</span>
    </div>
  );
};

export default Footer;
