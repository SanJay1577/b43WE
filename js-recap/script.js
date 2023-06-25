console.log("application started")
//es5
// var
// function

//es6
//let const
// arrow functions
// anonums function 
// object and array destructuring
// template literals
//spread and rest operator 
//import and export 
// mrf functions

// difference betwen var let and const 

// not possible 
// const a = 15
// const a = 20

//possible
// var a = 20
// var a = 25

// not possible 
// let a = 20;
// let a = 25

// possible 
// let a = 15;
// a = 20;

// not possible
// const a = 15;
// a = 25

//hoisting (var)
// console.log(a) // undefined
// var a= 15;

//let and const
// it is also hoisted  (lexical scoping)
// console.log(a)
// let a = 25;

const personObj = {
    name : "sanjay",
    age : 25,
    profession : "software developer",
    getDetails () {
        console.log(`
        The name of the person is ${this.name}
        His age is ${this.age}
        and he is working as a ${this.profession}
        `)
    }
}
console.log(window)


console.log(this)
console.log(personObj.name)
personObj.getDetails()


function normalFunc(num) {
    //console.log("this is normal function")
    return num*num
}

const normalSqr = normalFunc(5);
console.log(`The normal function squre number ${normalSqr}`)


const arrowFunc = (num) => num*num

const arrowSqr = arrowFunc(5)
console.log(`The arrow function squre number ${arrowSqr}`)

// normal func differneces in arguments 
function funcWithArguments(){
    console.log(arguments)
}

funcWithArguments(1,2,4,5,4,8,7,8,9,10)


// spread operator 
let fruitsBasket = ["apple", "orange", "banana"];
let vegBasket = ["tomato", "onion", "brinjal"]; 

let fridgeTray = 
[
    "carrot", 
    "mango" , 
...fruitsBasket, 
...vegBasket
];

console.log(fridgeTray);

// rest operator 
let [firstItem, seconditem, ...rest] = fridgeTray; 
console.log(firstItem)
console.log(seconditem)
console.log(rest)

//object desturucturing

//structure 
const guviBootcamp = {
    frontend : "React",
    database : "mongodb",
    backend : "nodejs",
    server :"express"
}

// destructure (object)
const {frontend, database, backend, server} = guviBootcamp

console.log("Frontend : ", frontend)
console.log("database :", database)
console.log("backend :", backend)
console.log("server : ", server)
// giving alias name 
const {backend : course} = guviBootcamp;
console.log(course)

function getFrontendDetails(course){
 console.log(course)
}

getFrontendDetails(frontend)

// destructure (array)

const peopleArray = ["paraveen", "sanjay", "chandru"]; 
const [student1, student2, student3] = peopleArray
// before destructring 
console.log(peopleArray[0])
console.log(peopleArray[1])
console.log(peopleArray[2])

// after destructring 
console.log(student1)
console.log(student2)
console.log(student3)

//property shorthand
const studName = "sanjay"
const age = 25

function getstudentDetails() {
    const studObj = {
        studName, // shorthand
        studAge : age,
    }

    console.log(studObj)
}
getstudentDetails()