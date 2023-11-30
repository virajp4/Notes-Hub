import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

import NotesBG from "../../assets/NotesBG.jpg";

import NavBar from "../../partials/NavBar/NavBar";
import Note from "./Note";

export default function Notes() {
  return (
    <div className="bg-black h-full w-screen relative">
      <NavBar active="Notes" />
      <div className="h-screen w-screen bg-black">
        <div className="h-[60%] bg-NotesBG bg-cover bg-bottom relative">test</div>
        <div className="h-full bg-black relative">test</div>
      </div>
    </div>
  );
}