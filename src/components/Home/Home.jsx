import React from "react";

import NavBar from "../../partials/NavBar/NavBar";
import Card from "../../partials/Card/Card";

import HomeBG from "../../assets/homeBG.jpg";
import CodeImage from "../../assets/code.jpg";
import CalcImage from "../../assets/calc.jpg";
import NotesImage from "../../assets/notes.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="bg-black h-full w-screen relative">
      <NavBar active="Home" />
      <div className="h-screen w-screen bg-black">
        <div className="h-1/2 md:h-1/2 bg-HomeBG bg-cover bg-bottom relative "></div>
        <div className="h-full bg-black relative">test</div>
      </div>
    </div>
  );
}
