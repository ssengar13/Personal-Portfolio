import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
  FaYoutube,
  FaGoogle,
  FaBriefcase,
  FaBlog,
  FaBlogger,
  FaBloggerB,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/arunmizhiteam?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/arun-krishna-28a224114/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com/arun_nair_krishna?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://unifiedvoip.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaBlog/>
          </a>
          <a
            href="https://unifiedvoice.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaBriefcase />
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Media;
