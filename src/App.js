import React from "react";
import Die from "./Die";
function App() {

   function allNewDice()
   {
    const Array = [];
    for(let i = 0 ; i < 10 ;i++)
    {
        Array.push(Math.floor(Math.random()* 6));
    }
    return Array;
   }
   console.log(allNewDice());


  return (
    <div className="main">
      <div className="dice-container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="7" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
    </div>
  );
}

export default App;
