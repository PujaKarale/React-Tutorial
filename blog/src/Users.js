import React from 'react'
import User1 from './User1'

//click event and function

export default function Users() {
     let data="pooja karale"
    function apple(){
        data="Rohit"// variable is not updated  so we use state
           alert(data)
    }

    function home(){
        alert("home function called")
    }
  return (
    <div>
      <h1>Welcome to react app</h1>
      <h2>{data}</h2>
      <User1/>
       <button onClick={home}>Click Me 1</button> 
      <button onClick={()=> alert(data)}>Click Me 2</button>

    </div>
  )
}
