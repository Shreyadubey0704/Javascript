// singleton
// object.create

// object literals

const mySym = Symbol("Key1")
 
const JsUser = {
    name : "Shreya",
    "full name": "Shreya Dubey",
    [mySym ]: "mykey1",
    age: 18 ,
    location : "noida",
    email : "shreya@gamil.com",
    isloggedIn : false,
    lastloginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

// console.log(JsUser[mySym])
// console.log(typeof mySym)

// for change 
JsUser.email = "Shryea kfj"
//Object.freeze(JsUser)
JsUser.email = "shreyamircosoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
