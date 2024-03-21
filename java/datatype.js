/*
----------primitive ----------

7 types: Number, String, Boolean, Null, undefined, Symbol, bigint


const id=symble('123')  // both value will be defferent
const anotherId=symble('123')

console.log(id===anotherId) // to compare and check data type

const bigNumber=12456789754654987n  // example of bingint

----------non-primitive  or reference type------

Array, object, function

when we check data type form typeof function all are retrun as object but in case 
function is return function.
*/

const heros=["Hanuman Ji","Saktiman","Superman"]  // example of array

//object
let myObj={
    name:"Amit",
    age:33
}   //  all data under curly brasis are object

//function

const myFunciton=function(){    //object funciton 
console.log("Hello")
}

console.log(typeof(heros))




