import { useGame } from "./GameContext";
import Welcome from "./Welcome";

export default function App() {
  const { playing } = useGame();

  return (
    <>
      <h1>Whack-a-Mole</h1>
      {playing ? <p>The game has begun!</p> : <Welcome />}
    </>
  );
}
