import React from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import MoonIMG from "../../../assets/moon.png";
import EarthIMG from "../../../assets/earth.png";
import JupiterIMG from "../../../assets/jupiter.png";
import AstroIMG from "../../../assets/astro.png";

export default function TabletView() {
  return (
    <div className="h-fill hidden md:block lg:hidden">
      <Parallax pages={1.8} className="bg-black font-bebas">
        <ParallaxLayer offset={0.4} speed={-1.15} factor={2}>
          <div className="moon-container w-[10%] ml-[12%] scale-75">
            <img src={MoonIMG} className="rounded-full shadow-[0_-5px_100px_rgba(100,100,100,0.9)]" style={{ width: "100%" }} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.15} speed={-1.45} factor={2}>
          <div className="earth-container w-[20%] ml-[38%] scale-[70%]">
            <img src={EarthIMG} className="rounded-full shadow-[0_0_100px_rgba(30,155,255,0.65)]" style={{ width: "100%" }} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.35} speed={-1.18} factor={2}>
          <div className="jupiter-container w-[15%] ml-[74%] scale-100">
            <img src={JupiterIMG} className="rounded-full shadow-[0_0_100px_rgba(160,82,45,0.7)]" style={{ width: "100%" }} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.72} speed={0.1} factor={2}>
          <img src={AstroIMG} style={{ scale: "1.7" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={1} factor={2}>
          <div className="text-center fa-bounce text-white flex justify-center items-center ">
            <div className="rounded-full border-white shadow-[0_0_100px_rgba(255,255,255,1)] w-fit border-2 p-2">
              <div className="">Scroll</div>
              <i className="fa-solid fa-arrow-down"></i>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={2} factor={1} className="flex justify-center">
          <h1 className="text-6xl md:text-8xl text-white font-bold cursor-default">Notes Hub</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.4} factor={1} className="flex justify-center">
          <h1 className="text-4xl md:text-7xl text-white text-center cursor-default">Next cosmic stop?</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1.21} speed={1} factor={1} className="flex w-[10%] ml-[15%] max-w-fit">
          <a
            className="transition ease duration-300 text-1xl md:text-4xl text-white hover:text-zinc-400 text-center cursor-pointer after:bg-zinc-400 after:absolute after:h-1 after:w-0 after:top-[35px] after:left-[50%] after:translate-x-[-50%] after:translate-y-1/2 hover:after:w-full after:transition-all"
            href="https://virajp4.me/GPA-Wiz/"
            target="_blank"
          >
            GPA
          </a>
        </ParallaxLayer>
        <ParallaxLayer offset={1.28} speed={1} factor={1} className="flex w-[10%] ml-[44.5%] text-white max-w-fit">
          <a
            className="transition ease duration-300 text-1xl md:text-4xl text-white hover:text-sky-500 text-center cursor-pointer after:bg-sky-500 after:absolute after:h-1 after:w-0 after:top-[35px] after:left-[50%] after:translate-x-[-50%] after:translate-y-1/2 hover:after:w-full after:transition-all"
            href="/codes"
          >
            ELAB
          </a>
        </ParallaxLayer>
        <ParallaxLayer offset={1.15} speed={1.5} factor={1} className="flex w-[10%] ml-[78%] max-w-fit">
          <a
            className="transition ease duration-300 text-1xl md:text-4xl text-white hover:text-orange-500 text-center cursor-pointer after:bg-orange-500 after:absolute after:h-1 after:w-0 after:top-[35px] after:left-[50%] after:translate-x-[-50%] after:translate-y-1/2 hover:after:w-full after:transition-all"
            href="/notes"
          >
            Notes
          </a>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
