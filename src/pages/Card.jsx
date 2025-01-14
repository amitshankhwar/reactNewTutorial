import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <p>{item.alt_description}</p>
      <img src={item.urls.small} alt="" />
      <p>likes - {item.likes}</p>{" "}
    </div>
  );
};

export default Card;
