import React from "react";


function Die(prop)
{
    // console.log(prop)
    const styles  = {
        backgroundColor: prop.isHeld ? "#59E391" : "white"

    }
return <div className="sett" style={styles}

onClick = {prop.holdDice}

>
    <h1 className="die-noo" >{prop.value}</h1>
    </div>
}

export default Die;