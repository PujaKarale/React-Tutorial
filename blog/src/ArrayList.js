import React from 'react'
import Table from 'react-bootstrap/Table';

//map method in array

export default function ArrayList() {
const arr=['pooja','nikki','rohii'];
const data=[{name:'pooja' , id: 1},{name:'pooja' , id: 2},{name:'rohii' , id: 3}]


  return (
   <div>
    <Table striped bordered hover variant='dark'>
    <tbody>  

      <tr>
        <td> Name </td>
        <td> Id </td>
      </tr>
{
      data.map((item,i)=>  //Warning: Each child in a list should have a unique "key" prop.
                         // to handle this error we add key

                         // render table data on codition
        item.name==='pooja'?
        <tr key={i}>
          <td>{item.name}</td>
          <td>{item.id}</td>
           </tr> : null
        
        
  )

}

  </tbody>
   </Table>
   <NestedList/>

   </div>
  )
}


 function NestedList(){
  const user=[{name: 'john',  email:'john@mail.com',address:[ 
      {hn : 10 , city: 'noida', country: 'india'}, 
      {hn : 11 , city: 'wai', country: 'india'},
      {hn : 12 , city: 'satara', country: 'india'}]},  
      
      {name : "max", email : 'max@mail.com', address : [
      {hn : 20 , city: 'pune', country: 'india'},
      {hn : 30 , city: 'delhi', country: 'india'},
      {hn : 40 , city: 'mumbai', country: 'india'}
      ]},]



    return (
      <div>
        <Table  striped bordered hover variant='dark'>
          <tbody>
            

              <tr>
                <td>Name</td>
                <td>email</td>
                <td>address</td>
                </tr>
            
           {
             user.map((item)=>
             <tr>
             <td>{item.name}</td>
             <td>{item.email}</td>
             <td>
              <Table  striped bordered hover variant='light'>
              <tbody>
              {item.address.map((ele)=>
                <tr>
                  <td>{ele.hn}</td>
                  <td>{ele.city} </td>
                  <td> {ele.country}</td>
                </tr>
             )}
             </tbody>
             </Table>
             
             </td>
              </tr>
             )

           }



          </tbody>
        </Table>
      </div>
    )
  }
  

