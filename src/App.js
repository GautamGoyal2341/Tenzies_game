import React from "react";
import Die from "./Die";
function App() {
  function allNewDice() {
    const Array = [];
    for (let i = 0; i < 10; i++) {
      Array.push({ value :Math.ceil(Math.random() * 6) ,
        isHeld : false
        
        });
    }
    return Array;
  }
  function narray() {
    // console.log("clicl");
    setDice(allNewDice());
  }
  //    console.log(allNewDice());

  const [dice, setDice] = React.useState(allNewDice());
  const dieele = dice.map((dii) => <Die value={dii.value} />);
  return (
    <div className="main">
      <div className="dice-container">{dieele}</div>
      <button className="roll-dice" onClick = {narray}>
        RE_ROLL
      </button>
    </div>
  );
}

export default App;
