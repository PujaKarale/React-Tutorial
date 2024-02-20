import React from 'react'

//map method in array

export default function ArrayList() {
const arr=['pooja','nikki','rohii'];
const data=[{name:'pooja' , id: 1},{name:'nikki' , id: 2},{name:'rohii' , id: 3}]


  return (
   <div>
    <table>
{
      data.map((item)=>
     <tr>
      <td>{item.name}</td>
      <td>{item.id}</td>
     </tr>
        
        
        )

}
</table>
   </div>
  )
}
