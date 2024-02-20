import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


//useeffect hook :=

export default function Hooks(props) {
  const[data,setData]=useState("learn react in a new way")
  const[count, setCount]=useState(0)
  const[name,setName]=useState(props.name)

  useEffect(()=>{
    console.log(`count is updated ${count}`) // count update vr call hoyel
  },[count])


  useEffect(()=>{
   console.log(`data is updated`) // data update vr call hoyel
  
  },[data])

  useEffect(()=>{
    alert(`hook is called on props`) // props update vr call hoyel
  },[props.name])

  
  return (
    <div>
      <h1>{name}</h1>
      <h2>{data}</h2>
      <h2>{count}</h2>
      <button onClick={()=>setData("experimental learning")}>Update Data</button>
      <button onClick={()=>setCount(count + 1)}>Update Count</button>
      <button onClick={()=> setName("useEffect hook in react")}>Update name</button>
    </div>

  )
}
