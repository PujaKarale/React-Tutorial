import React from 'react'
import { useState } from 'react'


//getting input box value:= on button click

export default function List() {
 const[val, setVal]=useState(null)
 const[print, setPrint]=useState(false)

   function  getData(data){
   setVal( data.target.value)
   console.log(val)
   setPrint(false)
   }
  return (
    <div>
      <input type="text"  placeholder='enter your name' onChange={getData}/>
      <button onClick={()=>setPrint(true)}>Update Data</button>
      {/* if print has value then print h1 otherwise null */}
      {print ? <h3>{val}</h3> : null}
      
    </div>
  )
}
