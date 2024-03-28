/* control flow
 if

syntex
if (condition) {
    
}
<,<=,>,>=,==,!=,
=== // it is use to compare valuse and type of value.

*/
if (2!=3) {
    console.log("If Statement Executed"); 
}
const temp=60
if (temp>=50) {
    console.log("Temprature is Greater then 50");
}
console.log("Temprature is less then 50");
//---if else

if (temp<=40) {
    console.log(`${temp}Temptrator is normal in India`);
} else {
    console.log(`${temp}Temptrator is not normal in India`);    
}
// short hand notation fror if or implicit scope
blance=1000
if (blance>500) console.log("balace is greater then 500");
//if (blance>500) console.log("balace is greater then 500"),console.log("second");
//this is not a good practice

const userLoggedin=true
const debitCard=true
if (userLoggedin && debitCard) {
    console.log("allowed");
    
}




