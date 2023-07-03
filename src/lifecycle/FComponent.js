import React, { useEffect } from 'react'

function FComponent({number}) {

    // componentDidMount =>Loading
    useEffect(()=>{
        console.log("Component mounting: useEffect called");
    })

    // componentDidUpdate => updating
    useEffect(()=>{
        console.log("component updating: useEffect with dependency called");
    }, [number])

    // componentWillUnmount=>Deleting
    useEffect(()=>{
        return ()=>{
            console.log("component will unmount: deleting by useEffect return call")
        }
    })

  return (
    <div>
         <h2>{number}</h2>
    </div>
  )
}

export default FComponent