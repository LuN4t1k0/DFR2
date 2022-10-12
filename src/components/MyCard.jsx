import React from "react";
import "../assets/css/card.css";

const MyCard = ({name, img, price,ingredients}) => {
  return (
   <>
   <div className="card">
    <div className="img">
      <img src={img} alt="pizza" />
    </div>
    <div className="name">
      <h2>{name}</h2>
    </div>
    <div className="ingredientes">
      
        {ingredients.map((item, index) => <p key={index}>{item}</p> )}
      
    </div>
    <div className="price">
      <h2>{price}</h2>
    </div>
    <div className="buttons">
      <button>Ver Mas</button>
      <button>Añadir</button>
    </div>
   </div>
   </>
  );
};

export default MyCard;

