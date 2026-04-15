// for of loop

// ["" , "", ""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet  of greetings) {
    //console.log(`Each character is ${greet}`);   
}

// Maps => unique value hogi or jis order me key rehega vaise hi print hoga repate nhi hoga


const map = new Map()
map.set ('IN' , "India")
map.set ('USA' , "United States of America")
map.set ('Fr' , "France")
map.set ('IN' , "India")

console.log(map);

// for (const key of map) {
//     console.log(key);
//     // esme pura aaray same print hojayage
// }


for (const [key, value] of map) {
    // console.log(key , ':-', value);   
}

const myObject = {
    game1 : 'NFS' ,
    game2 :  'Spiderman'

}

//  this is not working for object
// for (const [key , value] of myObject) {
//         console.log(key , ':-', value);   

// }


