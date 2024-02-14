
import React from 'react'
import { useState } from 'react'

//show or hide data on button click

export default function Toggle() {
    const [status, setStatus]=useState(false)


  return (
    <div>
          {status ? <p>this is toggle event</p> : null}
          <button onClick={() => setStatus(!status)}>Toggle</button>

         
          
    






    </div>
  )
}
