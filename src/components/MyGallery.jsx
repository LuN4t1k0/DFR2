import React, { useContext } from "react";

import "../assets/css/card.css";
import { AppContext } from "../context/AppContext";
import MyCard from "./MyCard";

const MyGallery = () => {
  const { data, searchPizza} = useContext(AppContext);

  return (
    <>
      <div className="wrapper">
        {data.map((item) => (
          <MyCard
            key={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            ingredients={item.ingredients}
            searchPizza={searchPizza}
            id={item.id}
            add={addToCart} 
          />
        ))}
        
      </div>
    </>
  );
};

export default MyGallery;
