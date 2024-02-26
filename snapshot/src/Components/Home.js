import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Home() {

  
   return (
    <div>
    <h1>This is a home page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus.</p>
    <Link to="/">Go to Navbar</Link>
     
    </div>
  )
}

