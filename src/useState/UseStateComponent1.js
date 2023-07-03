import React, { useState } from 'react'

function UseStateComponent1() {

    const [inputValue, setNewInputValue] = useState("DefaultFirstName");
    const changeValue= (e)=>{

        setNewInputValue(e.target.value)
    }

  return (
    <div>
        <input type='text' 
            placeholder='Enter first name' 
            value={inputValue}
            onChange={changeValue}
        />
    </div>
  )
}

export default UseStateComponent1