import React, { createContext, useState } from "react";
import LinkBtn from "./Utilities/LinkBtn";
import playstore from "./../assets/playstore.svg";
import Appstore from "./../assets/App_Store.png";
import Heroimg from "./../assets/hero.png"


function Hero() {

  return (
    <>
      <div className="bg-[#f5f5f5] pt-20">
        <h1 className="font-bold text-7xl text-center">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>
        </h1>
        <div className="mt-6 w-[370px] md:w-[750px] lg:w-[770px] mx-auto">
          <p className="text-center text-base md:text-lg text-[#627382]">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="flex justify-center gap-3 my-10">
     
          <LinkBtn title={'Google Play'} img={playstore}></LinkBtn>
          <LinkBtn title={'App Store'} img={Appstore}></LinkBtn>
        </div>
        <div className="flex justify-center">
          <img src={Heroimg} alt="" className="w-4/5 lg:w-auto"/>
        </div>
      </div>
    </>
  );
}
export default Hero;
