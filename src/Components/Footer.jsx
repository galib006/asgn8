import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <div>
      <div className="flex justify-between px-20 bg-[#001931]">
        <div className="gap-1.5 flex items-center text-base font-bold  text-white"><img src={logo} alt="Logo" className="w-10" /> HERO.IO</div>
        <div>
          <h4 className="text-white text-xl space-x-2">Social Links</h4>
          <ul className="flex text-white">
            <li><a href="#" className="rounded-full p-1.5 bg-white"><FaXTwitter /></a></li>
            <li><a href="#" className="rounded-full p-1.5 bg-white"><FaLinkedinIn /></a></li>
            <li><a href="#" className="rounded-full p-1.5 bg-white"><FaFacebookF /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
