/*//----------------object
//objects are basicaly declare by two one is literals and other is constructor
// singleton use is case of custructor
// in cast of literlas non- singleton object

//-------------
//  Object.creater // is a constructor  or singleton object
///---------------------------

const mySym=Symbol("Key1")
const JsUser={
"first name":"Amit",
[mySym]:"Key1",     
// if you want to add a symbe in a object so your have to put it in a square brackets
//otherwise it will treate like a strig
age:33,
location:"Noida",
email:"abc.gmail.com",
isLoggedIn:"false",
lastLogingDays:["Monday", "Sunday"]
}
// console.log(JsUser.age)   // to access selected value form object
// console.log(JsUser["first name"])  // to access selected value from object
// console.log(JsUser)    // to access all value form object
//console.log(JsUser.isLoggedIn)

/*
we can access valuse form object mostly from .  like JsUser.ager
but in some cases we have to use []  like JsUser["first name"] or JsUser[mysym]
*/
/*
JsUser.email="abc.google.com"   // to change the value of an object
console.log(JsUser.email)
//Object.freeze(JsUser)   // to freeze the objecte form changing no changing allowed
JsUser.email="amit.google.com"   // after freezing no changing allowed
console.log(JsUser.email);
// --- creating function for object greatings

JsUser.greating=function(){

    console.log("Hello user")
}
console.log(JsUser.greating())
JsUser.greatingTwo=function(){

    console.log(`Hello Js User, ${this["first name"]} and age is ${this.age}`)
}
console.log(JsUser.greatingTwo())

//=------------------------

const tinderUser={}   // empty object

tinderUser.id="123abc"
tinderUser.name="amit"
tinderUser.isll=false
// console.log(tinderUser)

//---

const regularUIser={

    email: "abc.email.com",
    fullName:{
        userFullName:{
            firstName:"Amit",
            lastName:"Singh"
        }
    }
}

console.log(regularUIser.fullName.userFullName)
//-----------

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

//const obj3={obj1,obj2}

// const obj3=Object.assign(obj1,obj2)  // it assign all data in object first and change obj1
// const obj4=Object.assign({}, obj1,obj2)  // it assign all data in new object because {}
// both are are to use combined object it need targe and sourse 
// we use {} object shift all date is empty object are store in new object
// console.log(obj2)
// console.log(obj3)
const obj4={...obj1,...obj2} 
// it is also used from join to object with the help of spread operator
console.log(obj4)

console.log(Object.keys(tinderUser))  // retrun the keys of an object in array formate
console.log(Object.values(tinderUser))  // retrun the value of an object in array formate

console.log(Object.entries(tinderUser))
// it return the one key and one value in sapreate array 
// first element of array will be key and senod is value
console.log(tinderUser.hasOwnProperty('name'))  // to check the properties
//*/
//----- dsturing of object

const course={
    couseName:"JS",
    price:5000,
    teacherName:"Amit Singh"
}
//couse.teacherName

const {teacherName} = course  
// this is dsturcting now we can directly access teachername without object anme

const {teacherName: teacher} = course  
// we can chance the key name to access easly
console.log(teacherName)
console.log(teacher)
//--------------------------






