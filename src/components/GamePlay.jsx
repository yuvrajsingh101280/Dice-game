import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";
const GamePlay = () => {
  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);

  const [score, setscore] = useState(0);
  const [error, seterror] = useState("");
  const [showRules, setshowRules] = useState(false);
  const generateNumber = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  const rollDice = () => {
    const randomNumber = generateNumber();
    setcurrentDice(randomNumber);
    if (!selectedNumber) {
      seterror("Please select a number to start with");
      return;
    }
    seterror("");

    if (selectedNumber === randomNumber) {
      setscore((prev) => prev + randomNumber);
    } else {
      setscore((prev) => prev - 2);
    }

    setselectedNumber(undefined);
  };
  const resetScore = () => {
    setscore(0);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          seterror={seterror}
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
        />
      </div>

      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={() => setshowRules((prev) => !prev)}>
          {showRules ? "Hide" : "show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 15px;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* max-width: 220px; */
    margin: auto;
    gap: 10px;
    width: 200px;
  }
`;
