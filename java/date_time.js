//------------------- Date & time -----------------

// let myDate=new Date()
// console.log(myDate)  // it return the current date and time
// console.log(myDate.toString())  // it return in some good Way 
// console.log(myDate.toLocaleString())
// console.log(typeof(myDate))
// let myCreatedDate=new Date(2024,3,22)   // month number start formzero 0 means it return April
// console.log(myCreatedDate.toDateString())
let myCreatedDate=new Date(2024,3,22, 5,5,5)   // month number start formzero 0 means it return April
console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()  // give time in mili second of now
console.log(Math.floor(Date.now()/1000)) // give time in second of now
console.log(myTimeStamp)
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.getTime())
console.log(myCreatedDate.getDate())  // retrun the day
console.log(myCreatedDate.getMonth()+1)  // return the months but we know it start form zero that by we add +1

let newDate=new Date()

newDate.toLocaleDateString('default',{
weekday: log  

})  // we can set the output after setting toLocakDateString
