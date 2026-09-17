import { useGame } from "./GameContext";
import Welcome from "./Welcome";
import MoleZone from "./MoleZone";

export default function App() {
  const { playing } = useGame();

  return (
    <>
      <h1>Whack-a-Mole</h1>
      {playing ? (
        <main className="game">
          <p>The game has begun, whack those moles!</p>
          <MoleZone />
        </main>
      ) : (
        <Welcome />
      )}
    </>
  );
}
