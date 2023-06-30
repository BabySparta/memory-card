import React from "react";
import "../../styles/Scoreboard.css"

const Scoreboard = ({ currScore, bestScore}) => {
    return (
        <div className="scoreboardWrap">
            <div className="scoreSubWrap">
                <div className="currTitle scoreTitle">Score:</div>
                <div className="currScore score">{currScore < 10 && 0}{currScore}</div>
            </div>
            <div className="scoreSubWrap">
                <div className="bestTitle scoreTitle">Best:</div>
                <div className="bestScore score">{bestScore < 10 && 0}{bestScore}</div>
            </div>
        </div>
    )
}   

export default Scoreboard;