const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
        
    }
}
//  user.welcomeMessage()
//  user.username = "sam" // contex chnge yha pr
//  user.welcomeMessage()

// comment hta ke run hogA Tb show hoga contex wanra empty show hoga 

//console.log(this);

// this current contex ki bat krta h 


// function chai (){
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
  
// }

const chai = () => {
    let username = "hitesh"
    console.log(this);
  
}

// chai()

//  ===> basic arrow function  // explicit keyword jb retun lgana padhta h
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
//console.log(addTwo(3 , 4));


// ===> implicit arrow function
//const addTwo = (num1,num2) =>  num1 + num2
//const addTwo = (num1,num2) =>  (num1 + num2) //curly bracket me kra to return  likhna hoga ,paranthesis bracket me kra to nhi likhna hoga

const addTwo = (num1,num2) =>  ({username :"hitesh"})

console.log(addTwo(3 , 4));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()