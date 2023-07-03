import React, { useMemo, useState } from 'react'

function UseMemoComponent1() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementCounterOne = ()=>{
        setCounterOne(counterOne+1);
    }
    const incrementCounterTwo = ()=>{
        setCounterTwo(counterTwo+1);
    }

    // problem
    // const isEven = ()=>{
    //     console.warn("is Even called....");
    //     let i=0;
    //     while(i<200000000) i++;
    //     return counterOne %2 ===0 
    // }

    // solution
    const isEven = useMemo(()=>{    //function expression 
        console.warn("is Even called....");
        let i=0;
        while(i<200000000) i++;
        return counterOne %2 ===0 
    }, [counterOne])

  return (
    <div>
        <button onClick={incrementCounterOne}>CounterOne = {counterOne}</button>
        <div>
            {isEven ?"Even" : "Odd"}
        </div>
        <button onClick={incrementCounterTwo}>CounterTwo = {counterTwo}</button>
    </div>
  )
}

export default UseMemoComponent1