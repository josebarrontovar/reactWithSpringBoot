import {useState} from "react";

export function Contador(){
    const[counter,setCounter]=useState(0);

    const clickButton=()=>{
        setCounter(counter+1);
    }

    const decrementar=()=>{
        setCounter(counter-1);

    }

    const reset=()=>{
        setCounter(0);
    }

    return (
        <div>
            <h1>Contador</h1>
            <h2>{counter}</h2>
            <button onClick={decrementar}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={clickButton}>+</button>
          
        </div>
    )
}