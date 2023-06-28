import React from "react";
import Card from "./Card";

const Cards = ({ cardArr }) => {
  return (
    <div className="cardsWrap">
      {cardArr.map((card, i) => (
        <Card card={card} id={i} />
      ))}
    </div>
  );
};

export default Cards;
