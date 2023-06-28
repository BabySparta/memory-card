import React, { useState } from "react";
import Cards from "./Cards/Cards";

const Body = () => {
  const [cards, setCards] = useState([]);
  const [guessedCards, setGuessedCards] = useState([]);
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="body">
      <Cards cardArr={cards}/>
    </div>
  );
};

export default Body;
