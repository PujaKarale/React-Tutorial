import React, { useSyncExternalStore } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { useRef } from 'react'


//useeffect hook :=

export function Hooks(props) {
  const[data,setData]=useState("learn react in a new way")
  const[count, setCount]=useState(0)
  const[name,setName]=useState(props.name)

  useEffect(()=>{
    console.log(`useEffect hook is called on count is updated ${count}`) // count update vr call hoyel
  },[count])


  useEffect(()=>{
   console.log(`useEffect hook is called on  data is updated`) // data update vr call hoyel
  
  },[data])

  useEffect(()=>{
    alert(`useEffect hook is called on  props`) // props update vr call hoyel
  },[props.name])

  
  return (
    <div>
      <h1>{name}</h1>
      <h2>{data}</h2>
      <h2>{count}</h2>
      <button onClick={()=>setData("experimental learning")}>Update Data</button>
      <button onClick={()=>setCount(count + 1)}>Update Count</button>
      <button onClick={()=> setName("useEffect hook in react")}>Update name</button>
       <MemoHook/> 
      <RefHook/>
    </div>

  )
}

//useMemo hook :==

function MemoHook(){

  const [count, setCount]=useState(0)
  const[item, setItem]=useState(10)


  const multiCountMemo= useMemo(()=>count * 5 &&
    console.log("multicountmemo is called")
  ,[count])


  return(
  
    <div>
     <h1>useMemo hook in react</h1>
     <h2>{count}</h2>
     <h2>{item}</h2>
     <h2>{multiCountMemo}</h2>
<button onClick={()=> setCount(count + 1) }>update count</button>
<button onClick={()=> setItem(item + 10)}>update item </button>

    </div>
  )
}

//useRef hook:=

function RefHook(){

  let inputRef= useRef(null)
 
 function handleInput (){
     inputRef.current.value=1000 //value add hoyel on click vr
     inputRef.current.style.color="red"
     inputRef.current.focus()
  }
  return(
    <div>
    <h2>useRef hook in react</h2>
     <input type="text" ref={inputRef} />
     <button  onClick={handleInput}>Handle Input</button>

    </div>


  )
}



