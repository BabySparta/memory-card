import React from "react";
import Card from "./Card";
import "../../styles/cardStyles/Cards.css"

const Cards = ({ cardArr, makeGuess }) => {
  return (
    <div className="cardsWrap">
      {cardArr.map((card, i) => (
        <Card card={card} id={i} key={i} makeGuess={makeGuess}/>
      ))} 
    </div>
  );
};

export default Cards;
