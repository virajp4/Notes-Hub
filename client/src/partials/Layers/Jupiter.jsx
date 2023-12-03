import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

import JupiterIMG from "../../assets/jupiter.png";

export default function Jupiter({ offset, speed, factor, ml, scale }) {
  const containerClass = `jupiter-container w-[15%] ml-[${ml}%] scale-${scale}`;
  return (
    <ParallaxLayer offset={offset} speed={speed} factor={factor}>
      <div className={containerClass}>
        <img src={JupiterIMG} className="rounded-full shadow-[0_0_100px_rgba(160,82,45,0.7)]" style={{ width: "100%" }} />
      </div>
    </ParallaxLayer>
  );
}
