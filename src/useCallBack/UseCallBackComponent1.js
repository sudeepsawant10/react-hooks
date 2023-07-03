import { useCallback, useState } from 'react';
import React from 'react'
import UseCallBackComponent2 from './UseCallBackComponent2';

function UseCallBackComponent1() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementCounterOne = ()=>{
        setCounterOne(counterOne+1);
    }



    const fun = useCallback(()=>{
      console.log("component 1 function");
    },[counterTwo])

  return (
    <div>
        <UseCallBackComponent2 counterTwo = {counterTwo} myFunction = {fun}/>
        <button onClick={incrementCounterOne}>CounterOne = {counterOne}</button>
    </div>
  )
}

export default UseCallBackComponent1