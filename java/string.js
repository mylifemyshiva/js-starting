// string

const name="amit"
const repCount=50

console.log(name+ repCount+" value")

//string interpulation  // butten under esc `~ used
console.log(`Hello my name is ${name} and my value is ${repCount}`)  // `` used for this

const gameName= new String("Hitesh")
console.log(gameName)

//we can check all string method on web conssole
//we use on web console
//const gameName= new String("Hitesh") 
// gameName
// we can see string prototype



console.log(gameName[4]);
console.log(gameName.__proto__)
console.log(gameName.length) // to know the length
console.log(gameName.toUpperCase())   // for upper case
console.log(gameName.charAt("0"))   // to know the character of perticular position
console.log(gameName.indexOf("t"))  // to know the position of character
let newStr=gameName.substring(0,4)  // it will return starting 3 char not including last
console.log(newStr)
let newStr1=gameName.slice(-2,5)  // we can give negative value it will start from last
console.log(newStr1)
let newStr3="    Hitesh    "
console.log(newStr3)
console.log(newStr3.trim())  // to trim extra space
const url="abc_amit.412.com"
console.log(url.replace("_",""))  // for replace
console.log(url.includes("amit")) // to know that character includes or not
console.log(url.split("_"))  // to split