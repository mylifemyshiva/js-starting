//------------------------Number------------------

// const score =300
// const balace = new Number(300)  // dedicated Number it will fix as number
// console.log(score)
// console.log(balace)
// console.log(balace.toString())  // convert to number
// console.log(balace.toString().length) // check the length of string
// console.log(balace.toFixed(1))  // to fix the precision value like 1,2,3 etc digit after decemel
// const otherNumber=23.8966
//console.log(otherNumber.toPrecision(2)) 
/* toPrecesion is used to print value from start to which is set by us is () and round also and convert it into string */

// const oNumber1= 1000010
// console.log(oNumber1.toLocaleString())  // it return that value like 1,000,010  in readable maner like us standerd
// console.log(oNumber1.toLocaleString('en-IN'))// it return that value like 10,00,010  in readable maner like Indian standerd


//------------------------maths ---------------------------------------
// console.log(Math)
// console.log(Math.abs(-4));  //abs is used to retrun the positive value
// console.log(Math.round(4.66));  // for rounging value
// console.log(Math.ceil(56.83));  // it is used to round up without decemial
// console.log(Math.floor(56.83));// it is used to round down without decemial
// //--
// console.log(Math.max(4,5,6,1,8,9)) // return the maximum value
// console.log(Math.min(4,5,6,1,8,9)) // return the minimum value

// console.log(Math.random())  // return the random value between 0 to 1 in decimal
// console.log(Math.random()*10)  // it will shift one decemal // after that it may be zero for that we use
// console.log((Math.random()*10)+1) // to avoide zero result we add + it means it reatern atlead 1
const min=10
const max=20
console.log(Math.floor((Math.random()*(max-min)+1))+min) // to get the rendom value between 10 to 20