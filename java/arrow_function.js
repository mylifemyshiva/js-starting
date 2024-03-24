/* //this keywork is used for current contaxt.

const userName="Madan Mohan"
const user={
    userName:"Amit Singh",
    price:5000,

welcomeMessage: function()
{
console.log(`${this.userName} welcome to this page`) 
// this will return amit singh
// we use this so it from retrun form current contanxt in object
//console.log(`${userName} welcome to this page`) 
// this will return madan mohan
// it will return form outside scope
//console.log(this) // this will give all in current context.
}
}
console.log(this) // return emplty curly brasis if outside any scope
user.welcomeMessage()
*/

function chai(){
    let userName="Amit"
    console.log(this.userName)
}
chai()   // this will return undefined because this not works in function

//-----------------------arrow function
//Syntax 
//   ()=>{}

const addTwo=(num1, num2) =>{   // basic arrow function
return(num1+num2)
}
console.log(addTwo(10,20))
//-- 
const addThree=(num1,num2,num3)=>num1+num2+num3  // implicit return function
const addThree1=(num1,num2,num3)=>(num1+num2+num3)  // implicit return function
// if we are not using curly brasis ther is no need to use return keywork
// but if we put it into curly brasis so we have to give  return keyword
const addThree2=(num1,num2,num3)=>({username:"amit"}) 
// we are using objecet but object are used within curly brasis so that
// we put curly brasis is a bracket the it will work
console.log(addThree(10,20,40))
