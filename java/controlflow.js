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
/* ---------- switch case

syntex--
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

let months=13
switch (months) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("Not it the List");
        break;
}



