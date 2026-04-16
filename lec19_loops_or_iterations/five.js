// for each loop

const coding = ["js", "java", "python", "rubby","cpp" ]

// call back function esme name nhi likhte h  

// coding.forEach( function  (val){
//     console.log(val); 
// })


// arrow function
// coding.forEach( (item) => {
//     console.log(item);

// })

// function printMe(item){
//     console.log(item); 
// }
// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )