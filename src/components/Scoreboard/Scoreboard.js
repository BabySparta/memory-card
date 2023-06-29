import React from "react";

const Scoreboard = ({ currScore, bestScore}) => {
    return (
        <div className="scoreboardWrap">
            <div className="currScore">{currScore}</div>
            <div className="bestScore">{bestScore}</div>
        </div>
    )
}   

export default Scoreboard;