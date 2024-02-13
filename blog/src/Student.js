import React from 'react'

export default function Student(props) {
  return (
    <div style={{backgroundColor: 'lightcoral'}}>
      <h1>props in react</h1>
     <h2>{props.name}</h2> {/*  getting data from app component */}
      <h3>{props.email}</h3>

    </div>
  )
}
