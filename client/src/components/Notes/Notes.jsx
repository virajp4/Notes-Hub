import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import NavBar from "../../partials/NavBar/NavBar";

import MoonIMG from "../../assets/moon.png";
import EarthIMG from "../../assets/earth.png";
import JupiterIMG from "../../assets/jupiter.png";
import AstroIMG from "../../assets/astro.png";

import Note from "./Note";

import ButtonGroup from "../../partials/ButtonGroup";

export default function Notes() {
  const years = [1, 2, 3, 4];
  return (
    <div className="h-fill bg-black scroll-smooth" >
      <NavBar active="Notes" />
      <div className="text-white pt-32">
        <div className="heading w-[100%] flex justify-center align-center">
          <div className="text-center w-[80%]">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Access <span className="text-blue-600 dark:text-blue-500">all-year notes</span> conveniently in one
              <span className="text-blue-600 dark:text-blue-500"> centralized</span> location.
            </h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-7">
              Ditch the hassle of hunting for notes everywhere - grab them all in one go and give your CTs the next day.
            </p>
            <ButtonGroup totalYears={4} />
          </div>
        </div>
        <div className="notes-content mt-16 w-[100%]">
          <div className="notes-grid">
            {years.map((year, key) => (
              <Note year={year} id={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
