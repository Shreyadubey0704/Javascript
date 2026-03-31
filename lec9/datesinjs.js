// Dates 

 let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

// months js me 0 se start hote h 
//let myCreatedDate = new Date(2023,0,23)
//console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-03-2024")

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
