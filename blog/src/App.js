import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Student from './Student';
import { useState } from 'react';


//using state to update data on button click with destructuring 
function App() {
  
  let [data, setData]=useState("Max")// data= "max", setdata="miller i,e updatedData"
   function updateData(){
    setData("Millar")
   }
  return (
    <div className="App">
     <h1>Hello word</h1>
     <h2>{data}</h2>
     <button onClick={updateData}>Update Data</button>
     <Counter/>
     <Student name={"john"} email={"john@mail.com"}/>
    </div>
  );
}

//counter app:=

function Counter(){
const[count, setCount]=useState(0)

return(
  <div>
    <p>{count}</p>
    <button onClick={()=> setCount(count + 1) }>Click to Increment</button>
    <button onClick={()=> setCount(count - 1 )}>Click to Decrement</button>
  </div>

)

}

export default App;
