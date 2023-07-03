import { memo } from "react";
import React from 'react'

function UseCallBackComponent2({counterTwo, myFunction}) {
    console.log("component2 called");
  return (
    <div>
        
    </div>
  )
}

// export default UseCallBackComponent2
export default memo(UseCallBackComponent2)