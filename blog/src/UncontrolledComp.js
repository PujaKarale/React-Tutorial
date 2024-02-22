import React from 'react'
import { useRef } from 'react'

//uncontrolled components means input fields are controlled by useRef

export default function UncontrolledComp() {
    let inputRef=useRef(null)
    let inputRef1= useRef(null)
    function onFormSubmit(e){
     e.preventDefault()
     console.log(`value of inputRef is : ${inputRef.current.value}`)
     console.log(`value of inputRef1 is : ${inputRef1.current.value}`)
  
    }
  return (
    <div>
        <h1>Uncontrolled component in react</h1>
      <form onSubmit={onFormSubmit}>
       <input type="text" placeholder='Enter name' ref={inputRef} /><br /><br />
       <input type="text" placeholder='Enter last name' ref={inputRef1} /><br /><br />
       <button type='submit'>Submit</button>

      </form>
    </div>
  )
}
