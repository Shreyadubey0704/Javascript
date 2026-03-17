let score = "Shreya"
//let score = undefined
//let score = null
//let score = "33"
// //  "33" ek valid number string hai,Isliye JavaScript usko convert kar deta hai:
// "33"=>33 
//let score = "33abc"
//let score = true



console.log(typeof score);
console.log(typeof(score)); // Parentheses optional hain


let valueIntNumber = Number(score)
//console.log(typeof valueIntNumber);
//console.log( valueIntNumber);

// "33" => 33
// "33abc" => NaN (not an number)
//  true => 1; false => 0

//let isLoggedIn = 1
let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn )
console.log(booleanIsLoggedIn);
 
// 1 => true; 0 => false
// "" => false
// "Shreya" => true

let somenumber = 33 
let stringnumber = String(somenumber)
console.log(stringnumber)
console.log(typeof stringnumber)






