import logo from './logo.svg';
import './App.css';

//creating first custom component
let descriptions=['Fundamental','Crucial','Core']

function randomIntGen(max){
     return Math.floor(Math.random()* (max +1));
}


let heading= "creating first custom react component"

let dydesc= descriptions[randomIntGen(2)]
function Header(){
return(
<article>
  <header>
    <img src={logo}  />
    <h1>{heading}</h1>
    <p>Posted by John Doe</p>
    <p> {dydesc} additional information here</p>
  </header>
  <p>Lorem Ipsum dolor set amet....</p>
</article>


)
}

//pasing that component as a html element in app component 
function App() {
  return (
    <>
    <Header></Header>
    <div className="blank">
       Lovely
    </div>
    </>
  );
}

export default App;
