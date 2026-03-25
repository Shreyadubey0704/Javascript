// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >=0);

//The reason is that an quality check == and comparisons > <>= <= work differently.
// Comparions convert null to a number ,treating it as 0.
// That's why(3) null>=0 is true and (1) null > 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0); 
// uper jo bhi hai sb aise comparison ko avoid kre clean code likhna shi rehta h 

// === (strict equality operator.)
console.log("2" === 2);


