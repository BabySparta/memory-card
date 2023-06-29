import React from "react";
import "../../styles/cardStyles/Card.css"

const Card = ({ card, id, makeGuess }) => {
    return (
        <div className="cardWrapper" id={id} onClick={makeGuess} name={card.name}>
            <img src={card.img} alt="" className="playerImg" name={card.name}/>
            <div className="playerName" name={card.name}>{card.name}</div>
        </div>
    )
}

export default Card;