import React from "react";

const Card = ({ card, id }) => {
    return (
        <div className="cardWrapper" id={id}>
            <img src={card.img} alt="" className="playerImg" />
            <div className="playerName">{card.name}</div>
        </div>
    )
}

export default Card;