import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const togleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={togleGamePlay} />}
      <Analytics />
    </>
  );
}

export default App;
