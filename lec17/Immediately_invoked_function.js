// Immediately Invoked Function Expression (IIFE)

//IIFE ek function hota hai jo define hote hi turant execute ho jata hai.
// exmaple=> (function(){
//     console.log("Hello IIFE");
//    })();
// Yaha:

// (function(){}) → function define hua
// () → immediately call ho gaya

// IIFE kyu use karte hain?
// Global scope pollution avoid karne ke liye

(function chai(){
    // name IIFE
    console.log(`DB CONNECTED`);
    
})();

(() => {
    // simpLE   IIFE without name ARROW FUNCTION USE 
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('SHREYA');
 

// 2 IIFE ek sath likhte h to semicolon yadd rahe  