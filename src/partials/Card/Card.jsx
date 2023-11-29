import React from "react";

export default function Card({ image, title, bodytext, ...props }) {
   return (
      <div id="card">
         <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text">{bodytext}</p>
               <a href="#" className="btn btn-primary">
                  Go somewhere
               </a>
            </div>
         </div>
      </div>
   );
}
