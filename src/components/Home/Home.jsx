import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBar from "../../partials/NavBar/NavBar";
import CustomCard from "../../partials/CustomCard/CustomCard";

import CodeImage from "../../assets/code.jpg";
import CalcImage from "../../assets/calc.jpg";
import NotesImage from "../../assets/notes.jpg";
import "./Home.css";

export default function Home() {
   return (
      <div id="home">
         <NavBar />
         <Container className="text-center d-flex justify-center align-items-center" style={{ minHeight: "85vh", backgroundColor: "black" }}>
            <Row className="d-flex justify-center align-items-center w-100 h-100">
               <CustomCard image={NotesImage} title="Notes" bodytext="Get high quality notes collected and made by your seniors." />
               <CustomCard image={CodeImage} title="E-Lab Solutions" bodytext="Get high quality notes collected and made by your seniors." />
               <CustomCard image={CalcImage} title="GPA Calculator" bodytext="Get high quality notes collected and made by your seniors." />
            </Row>
         </Container>
      </div>
   );
}
