import { useGame } from "./GameContext";

export default function Scoreboard() {
  const { score, restartGame } = useGame();

  return (
    <section className="scoreboard">
      <p>Your Score: {score}</p>
      <button onClick={restartGame}>Restart Game</button>
    </section>
  );
}
