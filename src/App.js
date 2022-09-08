import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
function App() {
  function allNewDice() {
    const Array = [];
    for (let i = 0; i < 10; i++) {
      Array.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return Array;
  }
  function narray() {
    // console.log("clicl");
    setDice(allNewDice());
  }
  console.log(allNewDice());
function holdDice(id)
{
    setDice(olddice => olddice.map(doe => 
        {
       return doe.id === id ? 
       {...doe , isHeld : !doe.isHeld}  : doe
        }))
}

  const [dice, setDice] = React.useState(allNewDice());
  const dieele = dice.map((dii) => (
    <Die value={dii.value} isHeld={dii.isHeld}  holdDice = {() => holdDice(dii.id)}  />
  ));
  return (
    <div className="main">
      <div className="dice-container">{dieele}</div>
      <button className="roll-dice" onClick={narray}>
        RE_ROLL
      </button>
    </div>
  );
}

export default App;
