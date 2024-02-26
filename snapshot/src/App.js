import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About';
import Navbar from './Components/Navbar';
import Page404 from './Components/Page404';
import { Navigate } from 'react-router-dom';

//Routing in react:=

function App() {

  return (
    <div>
        
    <BrowserRouter>
    
      <Routes>
       <Route path="/home"  element={<Home></Home>}/> 
        <Route path="/about"  element={<About></About>}/>
        <Route path="/"  element={<Navbar></Navbar>}/>
       
        {/* handle 404 page error::=== */}
         <Route path="/*" element={<Page404/>}></Route> 
        {/* redirect to home page when route is not present:=== */}
        <Route path="/*" element={<Navigate to="/home" />} />




        
        
        {/*we also add ele like that:= <Route path="/about"  element={<h2>welcome to react</h2>}/> */}
           

      </Routes>
      </BrowserRouter>
      
   
    </div>
  );
}

export default App;
