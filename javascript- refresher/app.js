"use strict";

// import { title } from "./util.js";

 //console.log(title);
console.log("welcome to angular");

function greet(username){
 return "hello my name is pooja"+ username;
};

let greets =greet();
console.log(greets );

function addition(id){
    return id;
}

const r= addition(5);
console.log(r)

//task

function combine(a,b,c){
    return a *b /c;
};

let result= combine(4,3,2)
console.log(result);


//arrow function  ()=>{}

let title= (name) => name;

console.log(title("pooja"));

//object and classes  
//create objects by using classes

class userData{
    constructor(name, age, gender){
        this.name= name;
        this.age= age;
        this.gender=gender;
    }
    greet(a,b){
        console.log("hello")
        return a +b 
    }
}

const data= new userData("pooja", 45, "female")
 console.log(data)

const t= data.greet(5,8)
console.log(t)


//Arrays:=

let hobbies=["reading","writing","sports","blog"]
let arr=hobbies.findIndex((item)=>{
    return item==="blog"
});

console.log(arr)

// map method
let h= hobbies.map((item)=> item + "!")
console.log(h, hobbies);


let str="pooja";
let ar=[...str]
console.log(ar)

let m=ar.map((item)=> ({text: item}))
console.log(m)


///spread operator

let color=["red","pink","white"]
let newColor=["black"]

let allColors=[...color, ...newColor];

console.log(allColors)

//spread oprator can be used on arrays as well

let user={
    name:"max",
    age: 30
}


let extendedUser={
    isAdmin: true,
    ...user
}

console.log(extendedUser)



