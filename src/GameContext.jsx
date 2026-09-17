import { createContext, useContext, useState } from "react";

const GameContext = createContext();

const TOTAL_HOLES = 9;

function moleRandomHole() {
  return Math.floor(Math.random() * TOTAL_HOLES);
}

export function GameProvider({ children }) {
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [moleLocation, setMoleLocation] = useState(moleRandomHole());

  const startGame = () => {
    setScore(0);
    setMoleLocation(moleRandomHole());
    setPlaying(true);
  };

  const whackaMole = () => {
    setScore((currentScore) => currentScore + 1);
    setMoleLocation(moleRandomHole());
  };

  const restartGame = () => {
    setPlaying(false);
  };

  const value = {
    playing,
    score,
    moleLocation,
    startGame,
    whackaMole,
    restartGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
