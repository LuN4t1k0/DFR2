import React from "react";
import "../assets/css/card.css";

const MyCard = ({name, img, price,ingredients}) => {
  return (
    <div className="card">
      <div className="card-banner">
        <p className="category-tag popular">Pizza</p>
        <img className="banner-img" src={img} alt="" />
      </div>
      <div className="card-body">
        <p className="blog-hashtag">#Food #Pizza</p>
        <h2 className="blog-title">{name}</h2>
        <p className="blog-description"></p>
        <div className="card-profile">
          <div className="card-profile-info">
            <h3 className="profile-name">{price}</h3>
            {ingredients.map((item, index) => <p key={index}>{item}</p>)}
            <p className="profile-followers">5.2K</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
