import React from "react";
import { NavLink } from "react-router-dom";

const MyNavBar = () => {
  return (
    <nav className="flex justify-between text-white bg-black w-full h-20 items-center p-5">
      <div className="izquierda">Pizzeria Mamma Mia!</div>
      <div className="flex justify-around sm:w20 w-60 centro">
        <div>
          <NavLink>Home</NavLink>
        </div>
        <div>
          <NavLink>Home</NavLink>
        </div>
      </div>
      <div className="derecha">
        <div className="cantidad">2</div>
        <div className="carro">
          <i className=" fa-solid fa-cart-shopping"></i>
        </div>
        <div className="total">
          <h3>Total : $18.500 </h3>
        </div>
      </div>
    </nav>
  );
};

export default MyNavBar;
