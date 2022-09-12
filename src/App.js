import React from "react";
import Die from "./Die";
import Confetti from "react-confetti";
import { nanoid } from "nanoid";
function App() {
   
    function florr()
    {
        let newdot = Math.ceil(Math.random() * 6)
        if(newdot == 1)
        {
            return ".";
        }
        if(newdot == 2)
        {
            return (
                ":"
        )
        }
        if(newdot == 3)
        {
            return ":.";
        }
        if(newdot == 4)
        {
            return "::";
        }
        if(newdot == 5)
        {
            return "::.";
        }
        if(newdot == 6)
        {
            return ":::";
        }
    }

  function everyTimeNew() {
    return {
      value: florr(),
     
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
    if(tenzies == false){
        setCount( prevvalue => prevvalue + 1)
    setDice((olddice) =>
      olddice.map((doi) => {
        return doi.isHeld ? doi : everyTimeNew();
      })
    );
  }else{
    setTenzies(false);
    setCount(0);
    setTimer(0);
    setDice(allNewDice);
  }
}
//   console.log(allNewDice());
  function holdDice(id) {
    setDice((olddice) =>
      olddice.map((doe) => {
        return doe.id === id ? { ...doe, isHeld: !doe.isHeld } : doe;
      })
    );
  }

  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [count , setCount] = React.useState(0);
  const [timer , setTimer] = React.useState(0);




  
    localStorage.setItem('items', setCount);
  

  React.useEffect(() => {
    // console.log("I Only run once (When the component gets mounted)")
    const allheld = dice.every((die) => die.isHeld);
    const firstval = dice[0].value;
    const sameval = dice.every((die) => die.value == firstval);
    if (sameval && allheld) {
      setTenzies(true);
    //   console.log("done");
    }
  }, [dice]);

  React.useEffect(() => {
              	
}, []);
const ites = localStorage.getItem('items')
console.log(ites)


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
      <button className="roll-dice" onClick={narray} >
        {tenzies ? "NEW GAME" : "ROLL"}
      </button>
    { tenzies ?  <Confetti
      width={2000}
      height={650}
    /> : ""}
    <div className="coc">No of counts - {count}</div>
    </div>

  );
}

export default App;
