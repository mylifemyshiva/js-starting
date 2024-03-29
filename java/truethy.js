//---thuethy mean we assume that this value is true.

const userEmail= null
if (userEmail) {
console.log("Got Email Id");    
}else{
    console.log("Don't Have Email Id");
}

// false value:- false, 0, -0, bigint 0n, "", null, undefined, NaN 
// turethy value:- "0", "false", " ", [], {}, function(){}

const abc=[]
if (abc.length===0) {
    console.log("Array is Empty");
    }else{
        console.log(`Array have length of ${abc.length} index`);
    }

const emptyObject={}
if (Object.keys(emptyObject).length===0) {
    console.log("Object is Empty");
    }else{console.log(Object.values(emptyObject));}
    
//----------- Nullish Coalescing Operator  : null or undefinded 

let val1

val1=5??10       // result will be 5   
val1=null??15       // result will be 15
val1=undefined??4??20      // result will be 4
// it retruns first truely value not null or undefined

//---Terniary Operator-------------------

//condition ? tue:false
const iceTeaPrice=100
iceTeaPrice >=80 ? console.log("Greater then 80"):console.log("less then 80");
