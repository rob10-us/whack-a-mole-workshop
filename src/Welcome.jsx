import { useGame } from "./GameContext";

export default function Welcome() {
  const { startGame } = useGame();

  return (
    <section className="welcome">
      <h2>Welcome! Test your skills at Whack-a-Mole!</h2>
      <p>
        Instructions: Click to whack a mole. Each mole whacked counts for one
        point.
      </p>
      <p>Whack as many moles as possible and see how high you can score!</p>
      <button onClick={startGame}>Start Whacking Moles!</button>
    </section>
  );
}
