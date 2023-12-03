import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

import EarthIMG from "../../assets/earth.png";

export default function Earth({ offset, speed, factor, ml, scale }) {
  const containerClass = `earth-container w-[20%] ml-[${ml}%] scale-${scale}`;
  return (
    <ParallaxLayer offset={offset} speed={speed} factor={factor}>
      <div className={containerClass}>
        <img src={EarthIMG} className="rounded-full shadow-[0_0_100px_rgba(30,155,255,0.65)]" style={{ width: "100%" }} />
      </div>
    </ParallaxLayer>
  );
}
