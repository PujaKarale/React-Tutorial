import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About';
import Navbar from './Components/Navbar';

//Routing in react:=

function App() {
  return (
    <div>
        
    <BrowserRouter>
    <Navbar/>
      <Routes>
       <Route path="/home"  element={<Home></Home>}/> 
        <Route path="/about"  element={<About></About>}/>
        
        {/*we also add ele like that:= <Route path="/about"  element={<h2>welcome to react</h2>}/> */}
           

      </Routes>
      </BrowserRouter>
      
   
    </div>
  );
}

export default App;
