import { useGame } from "./GameContext";

const TOTAL_HOLES = 9;

export default function MoleZone() {
  const { moleLocation, whackaMole } = useGame();

  const holes = Array.from({ length: TOTAL_HOLES });

  return (
    <ul className="mole-zone">
      {holes.map((hole, holeLocation) => {
        const holeHasMole = holeLocation === moleLocation;

        return (
          <li
            key={holeLocation}
            className={"hole" + (holeHasMole ? " mole" : "")}
            onClick={holeHasMole ? whackaMole : undefined}
          ></li>
        );
      })}
    </ul>
  );
}
