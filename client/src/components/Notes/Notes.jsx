import { useContext } from "react";
import { NotesContext } from "../../contexts/notes-context";

import NavBar from "../../partials/NavBar/NavBar";
import NotesHeading from "./NotesHeading";
import ButtonGroup from "../../partials/ButtonGroup";
import Note from "./Note";

export default function Notes() {
  return (
    <div className="min-h-screen h-fill bg-black scroll-smooth">
      <NavBar active="Notes" />
      <div className="text-white pt-32">
        <div className="heading w-full flex flex-col items-center text-center">
          <div className="w-[80%]">
            <NotesHeading />
            <ButtonGroup totalYears={4} />
          </div>
        </div>
        <div className="notes-content mt-16 w-[100%]">
          <div className="notes-grid">
            <Note />
          </div>
        </div>
      </div>
    </div>
  );
}
