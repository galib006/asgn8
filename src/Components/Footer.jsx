import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <div className="bg-[#001931] pt-9 ">
      <div className="px-20 ">
        <div className="border-b-1 border-b-[#ffffff42] flex justify-between ">
          <div className="gap-1.5 flex items-center text-base font-bold  text-white"><img src={logo} alt="Logo" className="w-10" /> HERO.IO</div>
        <div className="">
          <h4 className="text-white text-xl mb-3">Social Links</h4>
          <ul className="flex text-black space-x-3">
            <li><a href="#" className="block rounded-full p-1.5 bg-white"><FaXTwitter /></a></li>
            <li><a href="#" className="block rounded-full p-1.5 bg-white"><FaLinkedinIn /></a></li>
            <li><a href="#" className="block rounded-full p-1.5 bg-white"><FaFacebookF /></a></li>
          </ul>
        </div>
        </div>
      </div>
      <div className="py-7">
        <p className="text-[#FAFAFA] text-center text-base">Copyright © 2025 - All right reserved</p>
      </div>
    </div>
  );
}

export default Footer;
