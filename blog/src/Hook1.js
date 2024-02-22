import React from 'react'
import { forwardRef } from 'react'

 function Hook1(props, refer) {
  return (
    <div>
      <input type="text"  ref={refer} />
    </div>
  )
}

export default forwardRef(Hook1)
