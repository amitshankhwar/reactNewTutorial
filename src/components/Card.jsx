import React from "react";
import "./Card.css"; // Import the CSS file

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <img className="product-image" src={item.image} alt={item.title} />
      <div className="card-body">
        <h3 className="title">{item.title}</h3>
        <p className="description">{item.description}</p>
        <div className="price">${item.price}</div>
        <div className="rating">
          Rating: <span>{item.rating.rate}</span> ({item.rating.count} reviews)
        </div>
      </div>
    </div>
  );
};

export default Card;
