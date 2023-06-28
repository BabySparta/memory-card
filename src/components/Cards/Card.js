import React from "react";
import "../../styles/cardStyles/Card.css"

const Card = ({ card, id }) => {
    return (
        <div className="cardWrapper" id={id}>
            <img src={card.img} alt="" className="playerImg" />
            <div className="playerName">{card.name}</div>
        </div>
    )
}

export default Card;