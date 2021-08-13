import { useState } from "react"

export const Counter = () =>{
    const [num, setNum]= useState(5);
    return (
        <>
        <button onClick={()=>setNum(num + 1)}>+</button>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num -1)}>-</button>
        <button onClick={()=>setNum(5)}>Reset</button>
            
        </>
    )
}