import React from "react";

import MoonIMG from "../../../assets/moon.png";
import EarthIMG from "../../../assets/earth.png";
import JupiterIMG from "../../../assets/jupiter.png";
import AstroIMG from "../../../assets/astro.png";

export default function MobileView() {
  return (
    <div className="h-screen md:hidden bg-black font-bebas flex flex-row justify-center w-full">
      <div className="w-screen relative">
        <div className="absolute top-[35vh] w-screen">
          <img className="" alt="Astro" src={AstroIMG} />
        </div>
        <div className="h-[25vh] flex justify-center items-end">
          <div className=" text-white text-7xl text-center">NOTES HUB</div>
        </div>
        <div className="w-screen">
          <div className="absolute w-[10%] top-[75vh] left-[10%] object-cover">
            <img className="" alt="Moon" src={MoonIMG} />
            <div className="text-center mt-2">
              <a
                className="transition ease duration-300 text-xl text-white hover:text-zinc-400 focus:bg-zinc-400"
                href="https://virajp4.me/GPA-Wiz/"
                target="_blank"
              >
                GPA
              </a>
            </div>
          </div>
          <div className="absolute w-[20%] top-[69vh] left-[38%] object-cover">
            <img className="" alt="Earth" src={EarthIMG} />
            <div className="text-center mt-2">
              <a className="transition ease duration-300 text-xl text-white hover:text-sky-500 focus:bg-sky-500" href="/codes">
                ELAB
              </a>
            </div>
          </div>
          <div className="absolute w-[25%] top-[75vh] left-[70%] object-cover">
            <img className="" alt="Jupiter" src={JupiterIMG} />
            <div className="text-center mt-2">
              <a className="transition ease duration-300 text-xl text-white hover:text-orange-500 focus:text-orange-500" href="/notes">
                Notes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
