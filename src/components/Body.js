import React, { useState } from "react";
import Cards from "./Cards/Cards";
import FilledCards from "./utils/FilledCards";
import ShuffleArr from "./utils/ShuffleArr";
import Scoreboard from "./Scoreboard/Scoreboard";
import "../styles/Body.css"

const Body = () => {
  const [cards, setCards] = useState(FilledCards);
  const [guessedCards, setGuessedCards] = useState([]);
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const makeGuess = (e) => {
    const cardGuessed = cards.find((card) => card.name === e.target.getAttribute("name"));
  
    const cardInArr = guessedCards.find((card) => card.name === cardGuessed.name);

    if (cardInArr) {  
        setCurrScore(0);
        setGuessedCards([]);
        setCards(ShuffleArr(cards));
    } else {
        setCurrScore(prevScore => prevScore + 1);
        setGuessedCards([...guessedCards, cardGuessed]);
        setCards(ShuffleArr(cards));
        updateBestScore();
    }
  }

  const updateBestScore = () => {
    if ((currScore + 1) > bestScore) {
      setBestScore(prevScore => prevScore + 1);
    }
  }

  return (
    <div className="body">
      <Scoreboard currScore={currScore} bestScore={bestScore} />
      <Cards cardArr={cards} makeGuess={makeGuess}/>
    </div>
  );
};

export default Body;
