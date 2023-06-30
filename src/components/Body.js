import React, { useState, useEffect } from "react";
import Cards from "./Cards/Cards";
import FilledCards from "./utils/FilledCards";
import ShuffleArr from "./utils/ShuffleArr";
import Scoreboard from "./Scoreboard/Scoreboard";
import "../styles/Body.css";

const Body = () => {
  const [cards, setCards] = useState(FilledCards);
  const [guessedCards, setGuessedCards] = useState([]);
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const firstCardClicked = currScore === 0 && startTime === null;
    if (firstCardClicked) {
      setStartTime(Date.now());
    }
  }, [currScore, startTime]);

  const makeGuess = (e) => {
    const currentTime = Date.now();
    const timeElapsed = currentTime - startTime;

    setElapsedTime(timeElapsed);

    setStartTime(currentTime);

    const isWithinTimeLimit = timeElapsed <= 1500;

    const cardGuessed = cards.find(
      (card) => card.name === e.target.getAttribute("name")
    );

    const cardInArr = guessedCards.find(
      (card) => card.name === cardGuessed.name
    );

    if (cardInArr) {
      setCurrScore(0);
      setGuessedCards([]);
      setCards(ShuffleArr(cards));
    } else {
      if (isWithinTimeLimit) {
        setCurrScore((prevScore) => prevScore + 3)
        updateBestScore(3);
      } else {
        setCurrScore((prevScore) => prevScore + 2);
        updateBestScore(2);  
      }
      setGuessedCards([...guessedCards, cardGuessed]);
      setCards(ShuffleArr(cards));
    }
  };

  const updateBestScore = (num) => {
    if (currScore + num > bestScore) {
      setBestScore((prevScore) => prevScore + num);
    }
  };

  return (
    <div className="body">
      <Scoreboard currScore={currScore} bestScore={bestScore} />
      <Cards cardArr={cards} makeGuess={makeGuess} />
    </div>
  );
};

export default Body;
