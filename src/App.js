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
//    console.log(allNewDice());

  const [dice,setDice] = React.useState(allNewDice());
  const dieele = dice.map(dii => <Die value  = {dii} /> )
  return (
    <div className="main">
      <div className="dice-container">
        {dieele}
      </div>
      <button className = "buttre" >RE_ROLL   </button>
    </div>
  );
}

export default App;
