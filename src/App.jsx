import { useGame } from "./GameContext";
import Welcome from "./Welcome";
import MoleZone from "./MoleZone";
import Scoreboard from "./Scoreboard";

export default function App() {
  const { playing } = useGame();

  return (
    <>
      <h1>Whack-a-Mole</h1>
      {playing ? (
        <main className="game">
          <p>The game has begun, whack those moles!</p>
          <Scoreboard />
          <MoleZone />
        </main>
      ) : (
        <Welcome />
      )}
    </>
  );
}
