import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

import AstroIMG from "../../assets/astro.png";

export default function Astro({ offset, speed, factor, ml, scale}) {
  const containerClass = `astro-container w-[30%] ml-[${ml}%] scale-${scale}`;
  return (
    <ParallaxLayer offset={offset} speed={speed} factor={factor}>
      <div className={containerClass}>
        <img src={AstroIMG} style={{ width: "100%" }} />
      </div>
    </ParallaxLayer>
  );
}
