import React, { useState } from "react";
import Cards from "./Cards/Cards";
import FilledCards from "./utils/FilledCards";
import ShuffleArr from "./utils/ShuffleArr";

const Body = () => {
  const [cards, setCards] = useState(FilledCards);
  const [guessedCards, setGuessedCards] = useState([]);
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const makeGuess = (e) => {
    const cardGuessed = cards.find((card) => {
        return card.name === e.target.name
    })
    const cardInArr = guessedCards.find((card) => {
        return card.name === cardGuessed.name
    })

    if (cardInArr) {
        setCurrScore(0);
        setGuessedCards([]);
        setCards(ShuffleArr(cards));
    } else {
        setCurrScore(currScore + 1);
        setGuessedCards([...guessedCards, cardGuessed]);
        setCards(ShuffleArr(cards));
    }
  }

  return (
    <div className="body">
      <Cards cardArr={cards} makeGuess={makeGuess}/>
    </div>
  );
};

export default Body;
