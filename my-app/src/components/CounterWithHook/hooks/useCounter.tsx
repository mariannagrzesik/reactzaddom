import { useState } from "react";

type CountType = {
    count: number,
    handleMinus: ()=>void,
    handlePlus: ()=>void,
}

export const useCounter=(): CountType=>{
    const [count, setCount] = useState(0);
    const handleMinus = ()=>{
            setCount((prev)=>prev-1)
        }
    const handlePlus = ()=>{
            setCount(prev=>prev+1)
        }
        return{
            count,
            handleMinus,
            handlePlus
        }
}