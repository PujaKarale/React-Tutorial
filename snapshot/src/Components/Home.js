import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div>
    <h1>This is a home page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus.</p>
    <Link to="/navbar">Go to Navbar</Link>
    </div>
  )
}

