//-------------------array----------------
/* we collect multiple item is a sinelge array
array in javascript is resizeable and mix data type it also contain arrya inside array
array indexing start form 0 in number form
it give the same reference  to all copy
like it will change orignal value.
*/
const myArray=[1,2,3,4,5,6]  
const myHeros=["Saktiman", "Hanumanji", "Other"]
console.log(myArray[1])
console.log(myHeros[1])
console.log(myArray.length)

// array methods

myArray.push(7)   // push in array is used to add value in array at last
myArray.pop()   // used to remove last value
console.log(myArray)
console.log(myArray.length)



