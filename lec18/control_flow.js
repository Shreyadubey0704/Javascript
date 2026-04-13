// if
 
const isUserloggedIn = true 
const temperature = 41 

// if(temperature < 50 ){
//     console.log("less than 50");
// }
// } else {
//     console.log("temperature is greater than 50");

// }
// console.log("excute");


// < ,>, <= ,>= , == , != , === (data type bhi check krta h) ,!== (for anti pattern check)

// const score = 200
// if (score > 100 ){
//     let power = "fly"
 // or const power = "fly"
 // or var power = "fly"
//     console.log(`user power : ${power}`);    
// }
//     console.log(`user power : ${power}`);

const balance = 1000
//if (balance > 500) console.log("test"),console.log("test2");   (es type se code nhi likhna chaiye)

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }


// && (and) || (or)

const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true



if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course ");
    
}
if (loggedInFromGoogle ||  loggedInFromEmail){
    console.log("user looged in");
    
}




