//const tinderUser = new Object() // singleton object hai
const tinderUser = {} // non singleton object h

 tinderUser.id = "123abc"
 tinderUser.name = "Sammi"
 tinderUser.isLoggedIn = false 


//console.log(tinderUser);

const regularUser = {
    email : "some@gamil.com",
    fullname: {
        userfullname :{
            firstname : "Shreya",
            lastname : "Dubey"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {1:"a",2:"b"}

//const obj3 = {obj1 ,obj2}
//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    }
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    couresename: "js in hindi",
    price :"999",
    courseInstructor : "hitesh bhai"
}

course.courseInstructor

const{courseInstructor: Instructor} = course

//console.log(courseInstructor);
console.log(Instructor);


//react (destructuring )
// const navbar = (company ) => {

// }
// navbar(company = "hitesh")


// API json

// 

{
    name : "hitesh",
    coursename : "js in hindi",
    "price": "freee"
}

[
    {},
    {},
    {}
]