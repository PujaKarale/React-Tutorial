import React from 'react'
import { useState } from 'react'

//controlled components means the input fields are controlled by react state 

export default function ControlledComp() {
  const [val, setVal]= useState("000")
  return (
    <div>
      <h2>Controlled component in react</h2>
      <input type="text" value={val}  onChange={(e)=>setVal(e.target.value)} /><br></br>
      <strong>{val}</strong>
      
    </div>
  )
}
