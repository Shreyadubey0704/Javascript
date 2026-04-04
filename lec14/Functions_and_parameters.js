
// function ka syntax
function sayMyName (){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("H");
}

//sayMyName() // function ka excution 

// function addTwoNumbers(number1, number2){ // number parameter hai 
//     console.log(number1 + number2);
 
// }

function addTwoNumbers(number1, number2){ // number parameter hai 
    //  let result = number1 + number2
    //  return result

    return number1 + number2

      
}
const result = addTwoNumbers(3, 5)
//addTwoNumbers(3, null) // null argument hai

//console.log("result" , result);

function loginUserMessage(username = "sam"){

//function loginUserMessage(username){
        if(!username) {
    //if(username == undefined) {
        console.log("please enter a username");
        return
    }
    return`${username} just logged in `
}
//console.log(loginUserMessage("hitesh"));
//console.log(loginUserMessage());

// "" empty stirng ko false value mante h
// undefined ko false valuse mante h


//function calculateCartPrice(...num1){
function calculateCartPrice(val1,val2, ...num1){

    return num1
}  // ... esko rest operator kehte h
console.log(calculateCartPrice(200,300,400,500));

const user = {
    username : "shreya ",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    useename : "sam",
    price :399
})

const myNewArray = [200,300,400,500]
function returnSecondvalue(getArray){
    return getArray[1]
}
//console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([299,399,444,500]));



