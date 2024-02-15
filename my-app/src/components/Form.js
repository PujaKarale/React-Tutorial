import { getQueriesForElement } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'


//handling basic form:=

export default function Form() {

const [name, setName]=useState("")
const[tnc, setTnc]=useState(false)
const[interest, setInterest]=useState("")

  function  getFormData(e){
    console.log(name,tnc,interest)
    e.preventDefault()
   
    }
  return (
    <div>
        <form onSubmit={getFormData}>

       <input type="text"  placeholder='enter name' value={name} onChange={(e)=> setName(e.target.value)} />
       <select onChange={(e)=> setInterest(e.target.value)}>
        <option>Select options</option>
        <option>Marvel</option>
        <option>Dc</option>
        </select>

        <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)} /><span>Accept terms and conditions</span>
        <button type="submit">Submit</button>
        <button>Clear</button>


        </form>
        
      <FormValidations/>
    </div>
    )
  }



  function FormValidations(){
  
    const[name, setName]=useState("")
    const[pass, setPass]=useState("")
    const[userErr, setUserErr]=useState(false)
    const[passErr, setPassErr]=useState(false)


   function onFormSubmit(e){
   e.preventDefault()
   if(name.length <3  || pass.length <3) {//updated values la validations add kele
       alert("enter valid data")
   }else{
      alert(" all good")
   }
    }

  
   function userHandler(e){
        console.log(e.target.value.length)
        let item= e.target.value;
        if(item.length<3){
          
          setUserErr(true)
        }else{
          
          setUserErr(false)
        }
       setName(item) // name sathi state set keli

   }


  function  passHandler(e){
    let item= e.target.value;
   if(item.length < 2){
  setPassErr(true)
   }else{
  setPassErr(false)
   
  }
   setPass(item)  // password sathi state set keli
  }



    return(
      <div>
     <h4> Adding basic Validations to Form</h4>
    <form onSubmit={onFormSubmit}>
    <input type="text"  placeholder='enter your name' onChange={userHandler} />
     {userErr ? <span> Enter Valid Credentials</span> : null} <br /><br />
    <input type="password" placeholder='enter your password'  onChange={passHandler}  />
    {passErr ? <span> Enter Valid password</span> : null}<br /><br />
      <button type ="submit">Submit</button>
      </form>
      </div>
    )
  }
