import React, { useContext } from "react";

import "../assets/css/card.css";
import { AppContext } from "../context/AppContext";
import MyCard from "./MyCard";

const MyGallery = () => {
  const { data } = useContext(AppContext);
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
          />
        ))}
        {console.log(data)}
      </div>
    </>
  );
};

export default MyGallery;
