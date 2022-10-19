
import React from "react";
import "../assets/css/card.css";
import MyButton from "./MyButton";

const MyCard = ({id,name, img, price,ingredients, searchPizza, addToCart}) => {
  
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
      <button id={id} onClick={(e) => {addToCart(e.target.id)}}>Agregar</button>
      <MyButton id={id} text={"ver mas "} action ={searchPizza}/>
     

    </div>
   </div>
   </>
  );
};

export default MyCard;