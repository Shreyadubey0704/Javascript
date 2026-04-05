//“Variable kaha declare hua hai aur kaha tak use ho sakta hai” = Scope
//Global Scope=Jo variable function ke bahar declare hota hai
// Pure program me kahin bhi use ho sakta hai
// Block Scope (let, const)={ } (block) ke andar define hua variable
// Sirf us block ke andar hi use hota hai

//var c= 300
let a = 100 

if (true){
    let a = 10
    const b = 20 
    //console.log("INNER",a);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one (){
    const username = "hitesh"
    function two (){
        const website = "youtube"
        console.log(username);
    }
  //  console.log(website);
    two()
}
//one()

if(true){
    const username = "Shreya"
    if(username=="Shreya"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website); // error aayega scope se bhr hai..
    
}
//console.log(username); // error aayega scope se bhr h 

// ++++++++++++++++++ interesting ++++++++++++++++++


//Hoisting = declaration ko top pe move karna (mentally), execution se 


console.log(addOne(5))//JavaScript hoisting karta hai
function addOne(num){
    return num + 1 
}


//addTwo(5) eeror (const addTwo hoist hota hai but initialized nahi hota) 
const addTwo = function(num){
    return num + 2 
}




