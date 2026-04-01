/*👉 JavaScript ek dynamic language hai (static nahi)

1. Static Typing (kya hota hai?)

👉 Static languages me variable ka type pehle se fixed hota hai (compile time par)

Example:
C++
Java
int a = 10;   // sirf number hi assign hoga
a = "hello";  // ❌ error

2. Dynamic Typing (JavaScript ka concept)

👉 JavaScript ek dynamic typing language hai
let a = 10;       // number
a = "hello";      // string
a = true;         // boolean
Same variable me alag-alag type store ho sakta hai
👉 Type runtime par decide hota hai*/



// datatypes 

  // Primitive 

  // 7 types:  String, number , boolearn , null , undefined , smybol, bigint

const score = 100 
const scoreValuue  = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 23333333348949928876546n



  // Reference (Non primitive)

  // types: Array ,objects, Functions

  //array
   const heros = ["shakiman","naagraj","doga"];
   // object
   let myObj = {
    name : "Shreya",
    age: 19, 
  }

  //function
 
  const myFunctions = function(){
    console.log("hello world");
  }

  console.log(typeof score);
  console.log(typeof scoreValuue);
  console.log(typeof isLoggedIn );
  console.log(typeof outsideTemp);
  console.log(typeof userEmail);
  console.log(typeof id );
  console.log(typeof anotherId);
  console.log(typeof bigNumber);
  console.log(typeof heros);
  console.log(typeof myFunctions);

  // https://262.ecma-international.org/5.1/#sec-11.4.3

  