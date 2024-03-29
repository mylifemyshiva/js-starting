/* for loop  1 basic loop 

 first select and then ctrl d to select similar valuse
syntex
for (let i = 0; i < array.length; i++) {
    const element = array[i];
}
*/
   
for (let i = 0; i <=10; i++) {
    const element = i;
        if (element==5) {
            console.log("5 is best Number");
        continue;  
        }
    console.log(element);

}

// nested loop

for (let i = 1; i <= 5; i++) {
    console.log(`Table of  ${i}`);

    for (let j = 1; j <=10; j++) {
          
       // console.log(`Inner Loop ${j}`);
        console.log(`${i} * ${j} = ${i*j}  `);
        
    }
    
}
