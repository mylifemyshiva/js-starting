// Immediately Invocked Function Expression (IIFE)

// function chai(){
//     console.log("DB: Connected")
// }
// chai()
//--
(
    function chai(){
    console.log("DB: Connected");
}
)();  // always use semi collon to end the execution to face any array
// global scope ke polution se bacne ke liye iife use karete
// it execute imediatly 
(()=>{
    console.log("DB: Connected2")
})();

((name)=>{
    console.log(`DB: connected to ${name}`)
})("amit")


