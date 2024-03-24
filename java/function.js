//------------------------Functions-------------
//  function is a set of code  like a packeg of code

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
//function without return   in maket of function () are called parameters
//at the execution () are called      arguments
//addTwoNumbers(10,11)
// const result=addTwoNumbers(10,11) 
// this variable will not store any thing from this fun. because fun. is not returning
//anything funciton dosent have retrun type 
// console.log("result :", result)
// so variable will return "undefined"

function addTwoNumbers(num1,num2){
    const a = num1+num2   // we can store result in a seprate variable 
    return(num1+num2)  // we can return direct
    // after using retrun keywork anything will not be execute in this funciton like
    console.log(num1+num2)  // it will not work
}
// this function is using return type so this function will return something 
//that can be stored in a variable
const result=addTwoNumbers(10,11)
//console.log("result :", result)
//-------------

// function loginUserMassage(userName){
//     return `${userName}, just logged in`
// }
// console.log(loginUserMassage())

//function loginUserMassage(userName){  // we can defined the value like userName="unknown"
//    // if(userName===undefined){  // we can write like if(!userName) for condition
//         console.log("Please Enter User Name")
//         return   // with the help of this return outside if will not work in fun.
//     }
    // return `${userName}, just logged in`;

//console.log(loginUserMassage())

//--------------
//function calculateMyCart(...num){   
//... is a rest operator and it is also know as spread operator name depend on use
// this will hold then one value and convert it into array
// it is used when we dont know how much no of value will be received
    // return num 
//}
// console.log(calculateMyCart(1,2,5,80,80,40,50,100,4000))

function calculateMyCart(valu1, valu2,...num){   
    //... is a rest operator and it is also know as spread operator name depend on use
    // this will hold then one value and convert it into array
    // it is used when we dont know how much no of value will be received
        return num 
    }
    console.log(calculateMyCart(100,200,4000)) 
    // in this case first two value are shifted in valu1 and valu2 and other are like array
    // because of rest operator.

    //-- use of object inside a funciton

    const user ={
        userName:"hitesh",
        price:999
    }

    function handleObject(anyobject){  // anyobject is use because we can any obejct
console.log(`my user name is ${anyobject.userName}and my price is ${anyobject.price} `)

    }
    // handleObject(user)
    // or we can creater direct object
    handleObject({
        userName:"amit",
        price:1000
    })

    // array in fuction

    const myArray=[100,200,300,400,]
    function handleArray(myArray){
        console.log(myArray[2])
    }
    handleArray(myArray)
    //--- direct in side
    handleArray([500,1000,2000])
     

