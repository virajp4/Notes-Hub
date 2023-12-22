import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

import MoonIMG from "../../assets/moon.png";

export default function Moon({ offset, speed, factor, ml, scale }) {
  const containerClass = `moon-container w-[10%] ml-[${ml}%] scale-${scale}`;
  return (
    <ParallaxLayer offset={offset} speed={speed} factor={factor}>
      <div className="moon-container w-[10%] ml-[${ml}%] scale-${scale}">
        <img src={MoonIMG} className="rounded-full shadow-[0_-5px_100px_rgba(100,100,100,0.9)]" style={{ width: "100%" }} />
      </div>
    </ParallaxLayer>
  );
}
