import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      {/* Adding simple link to for going to components pages */}
      <ul>
    <li> <Link to = "/home">Go To Home</Link></li>
    <li> <Link to = "/about">Go To About</Link></li>
    
     </ul>
    </div>
  )
}
