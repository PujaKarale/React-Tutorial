import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>About page</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, nesciunt?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quas doloremque laboriosam?
      </p>
     <Link to="/Home">Go To Home</Link>
    </div>
  )
}
