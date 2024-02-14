import React from 'react'
import { useState } from 'react'


//handling basic form:=

export default function Form() {

const [name, setName]=useState("")
const[tnc, setTnc]=useState(false)
const[interest, setInterest]=useState("")

  function  getFormData(e){
    console.log(name,tnc,interest)
    e.preventDefault()
   
    }
  return (
    <div>
        <form onSubmit={getFormData}>

       <input type="text"  placeholder='enter name' value={name} onChange={(e)=> setName(e.target.value)} />
       <select onChange={(e)=> setInterest(e.target.value)}>
        <option>Select options</option>
        <option>Marvel</option>
        <option>Dc</option>
        </select>

        <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)} /><span>Accept terms and conditions</span>
        <button type="submit">Submit</button>
        <button>Clear</button>


        </form>
      
    </div>
  )
}
