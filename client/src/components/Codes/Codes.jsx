import { useContext } from "react";
import { NotesContext } from "../../contexts/notes-context";

import NavBar from "../../partials/NavBar/NavBar";
import Heading from "../../partials/Heading";
import ButtonGroup from "../../partials/ButtonGroup";

export default function Codes() {
  return (
    <div className="min-h-screen h-fill bg-black scroll-smooth">
      <NavBar active="E-Lab Solutions" />
      <div className="text-white pt-32">
        <div className="heading w-full flex flex-col items-center text-center">
          <div className="w-[80%]">
            <Heading type="Codes" />
            <ButtonGroup totalYears={2} />
          </div>
        </div>
        <div className="codes-content mt-16 w-[100%]">
          <div className="codes-grid"></div>
        </div>
      </div>
    </div>
  );
}
