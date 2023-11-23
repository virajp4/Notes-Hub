import React from "react";
import Card from "react-bootstrap/Card";

export default function CustomCard({ image, title, bodytext, ...props }) {
   return (
      <Card bg="dark" text="white" className={`m-4 p-0 ${props.className}`} style={{ width: "18rem", height: "20rem" }} props>
         <Card.Img variant="top" src={image} className="p-0"/>
         <Card.Body className="p-3">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{bodytext}</Card.Text>
         </Card.Body>
      </Card>
   );
}
