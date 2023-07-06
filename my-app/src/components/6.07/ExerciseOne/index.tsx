import { useEffect } from "react";

type FunctionParams ={
    a: number,
    b: number
}

export const ExerciseOne=()=>{
    
const add =({a,b}: FunctionParams)=>{
return a+b;
};
const minus =({a,b}: FunctionParams)=>{
return a-b;
};
const multiply =({a,b}: FunctionParams)=>{
return a*b;
};
const divide =({a,b}: FunctionParams)=>{
    if(b==0) console.log('b cannot be 0')
return a/b;
};

const higherOrder =(callback:({a,b}: FunctionParams)=>number, value1: number, value2: number  )=>{
    return callback({a: value1,b: value2});
}

useEffect( ()=>{
    console.log(higherOrder(add, 2,4))
    console.log(higherOrder(minus, 2,4))
    console.log(higherOrder(multiply, 2,4))
    console.log(higherOrder(divide, 2,0))
},[])
return(
    <span>zadanie pierwsze</span>
)

}

