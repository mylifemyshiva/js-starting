//-------------------array----------------
/* we collect multiple item is a sinelge array
array in javascript is resizeable and mix data type it also contain arrya inside array
array indexing start form 0 in number form
it give the same reference  to all copy
like it will change orignal value.
array used shallow copy  other then shallow copy is deep copy
*/
const myArray=[1,2,3,4,5,6]  
const myHeros=["Saktiman", "Hanumanji", "Other"]
// console.log(myArray[1])
// console.log(myHeros[1])
// console.log(myArray.length)

// array methods

// myArray.push(7)   // push in array is used to add value in array at last
// myArray.pop()   // used to remove last value
// console.log(myArray)
// console.log(myArray.length)
myArray.unshift(0)  // add a new element at starting and change the position of all exestinve element
// mosty we are not using this
// console.log(myArray)
myArray.shift()  // used to delete the element of an array from starting.
// console.log(myArray)
// console.log(myArray.includes(6))  // to check the value is exist or not it will retrun tru or false
// console.log(myArray.indexOf(2))
// return the element of that particular index.
//if value dosnot exist so it will return -1

const myNewArray=myArray.join()  // it convert arrya into string

// console.log(myArray)
// console.log(myNewArray)

// slice , splice
// console.log("A: " + myArray)
// console.log(myArray.slice(2,5))   
// it show sliced or cuted element from start point that we give to
// last point -1 that we give but it dosnot change orignal array
// console.log("B: " + myArray)
// console.log(myArray.splice(1,4))   
// splice show sliced or cuted element from start point that we give to
// last point that we give but it //change orignal array
//-console.log("C: "+ myArray)
//---------------

const marvel_heros=["thor", "ironman", "spiderman"]
const dc_heros=["thor", "ironman", "spiderman"]

//marvel_heros.push(dc_heros)  
// it not mergs the array it hold arrya inside array 
// in the same array

//console.log(marvel_heros)
//const allHeros=marvel_heros.concat(dc_heros)
//it mergs the array in a new array

const allNeweHeros=[...marvel_heros,...dc_heros]
// (...) is used to spred the array  // it mean like block kanch glass
// and as we showed above all spred value are hold in new array
// it will also used to concat
console.log(allNeweHeros)
//---
const anotherArray=[1,2,3,[4,5,6,[7,8],9]]  
// we create array insded array
console.log(anotherArray)
const realArray=anotherArray.flat(Infinity)
// if we have a nested array it will convert into a single array 
// we can go in depth like-  .flat(1), .flat(2), .flat(Infinity) to remove all nestedity 
console.log(realArray)

//-----------
console.log(Array.isArray("Hitesh")) // to check the given value is a array or not
console.log(Array.from("Hitesh"))   // it convert the given valur or string into array

console.log(Array.of(array1, array2)) // it also used to convert given value into array



