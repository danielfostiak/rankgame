"use client";

import CardItem from "./components/CardItem";

function Game({ gameData }) {
  return (
    <div>
      {gameData.correct.map((item) => (
        <CardItem main={item.main} value={item.value} isCorrect={true} />
      ))}
    </div>
  );
}

export default Game;
