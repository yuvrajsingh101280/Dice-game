import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const togleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={togleGamePlay} />}
   
    </>
  );
}

export default App;
