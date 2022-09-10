import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
function App() {
  function everyTimeNew() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }
  function allNewDice() {
    const Array = [];
    for (let i = 0; i < 10; i++) {
      Array.push(everyTimeNew());
    }
    return Array;
  }
  function narray() {
    // console.log("clicl");
    setDice((olddice) =>
      olddice.map((doi) => {
        return doi.isHeld ? doi : everyTimeNew();
      })
    );
  }
  console.log(allNewDice());
  function holdDice(id) {
    setDice((olddice) =>
      olddice.map((doe) => {
        return doe.id === id ? { ...doe, isHeld: !doe.isHeld } : doe;
      })
    );
  }

  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies , setTenzies] = React.useState(false);

  React.useEffect(() => {
	// console.log("I Only run once (When the component gets mounted)")
    const allheld = dice.every(die => die.isHeld);
    const firstval = dice[0].value;
    const sameval = dice.every(die => die.value == firstval);
    if(sameval && allheld)
    {
        setTenzies(true);
        console.log("done");
    }
}, [dice]);

  const dieele = dice.map((dii) => (
    <Die
      value={dii.value}
      isHeld={dii.isHeld}
      holdDice={() => holdDice(dii.id)}
    />
  ));
  return (
    <div className="main">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{dieele}</div>
      <button className="roll-dice" onClick={narray}>
        RE_ROLL
      </button>
    </div>
  );
}

export default App;
