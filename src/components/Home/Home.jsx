import React from "react";

import NavBar from "../../partials/NavBar/NavBar";
import Card from "../../partials/Card/Card";

import CodeImage from "../../assets/code.jpg";
import CalcImage from "../../assets/calc.jpg";
import NotesImage from "../../assets/notes.jpg";
import "./Home.css";

export default function Home() {
   return (
      <div className="bg-black h-screen w-screen">
         <NavBar />
      </div>
      // <div id="home" className="w-screen">
      //    <NavBar />
      //    <div className="text-center d-flex justify-center align-items-center" style={{ minHeight: "85vh", backgroundColor: "black" }}>
      //       <div className="d-flex justify-center align-items-center w-100 h-100">
      //          <Card image={NotesImage} title="Notes" bodytext="Get high quality notes collected and made by your seniors." />
      //          <Card image={CodeImage} title="E-Lab Solutions" bodytext="Get high quality notes collected and made by your seniors." />
      //          <Card image={CalcImage} title="GPA Calculator" bodytext="Get high quality notes collected and made by your seniors." />
      //       </div>
      //    </div>
      // </div>
   );
}
