import React from 'react'
import './Styles.css'
import style from './Custom.module.css'

export default function Styling() {
  return (
    <div>
      <h1 className='primary'>style type 1</h1>   {/*normal stylesheet style */}

      <h1 style={{backgroundColor:"beige"}}>style tyepe 2</h1>   {/*inline style*/}


      <h1 className={style.success}>style type 3</h1> {/* modular css style*/}
    </div>
  )
}
