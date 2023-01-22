// primitive data types 

// string  (value) "sanjay"
// Boolean  (value) true or false
// number   (value) 1, 2, 3, 4
// float  (value) 23.26544

// non primitive data types 

// array  (address) [collection of data]
// object  (address)

//////////////////////////////////////////////////////////////
// Arrays

// Types to access in array 
const arr = ["sanjay", "ajay", "anbu"]; 
console.log(arr);
// add a value at last index
arr.push("arun");
console.log(arr);
// remove a value at last index
arr.pop();
console.log(arr);
// add a value at first index
arr.unshift("arun");
console.log(arr);
// remove a value at first index
arr.shift();
console.log(arr);

// objects (key : value)

const studentObj = 
  {
    name : "sanjay",
    age : 25,
    isMentor : true
  } 
  
// accessing or iterating an object...... (dot operations)
console.log(studentObj)
console.log(studentObj.name); 
console.log(studentObj.age);
console.log(studentObj.isMentor);

// changing the values in object 
console.log(studentObj)

studentObj.name = "Ajay"; 
studentObj.age = 23;
studentObj.isMentor = false;

console.log(studentObj);
///////////////////////////////////////////////////

// Nested array and objects 
const arrOfObjects = [
      {
        name : "sanjay",
        age : 25,
        isMentor : true,
        stack : ["html", "css", "js", "react" , "sql" , "node"]
      }, 

      {
        name : "ajay",
        age : 23,
        isMentor : false,
        stack : ["html", "js"]
      }
]

console.log(arrOfObjects);
console.log(arrOfObjects[0])
console.log(arrOfObjects[0].stack)
console.log(arrOfObjects[0].stack[3])
console.log(arrOfObjects[1].stack[1])

///////////////////////////////////////////////////////////////
 
// copy by value and copy by reference
// copy by value......

let a = 15; //jksdhj
let b = a; //122khj
console.log("b", b);
console.log("a", a);
b = 20; 
console.log("b", b); 
console.log("a", a);

// copy by reference.....
let obja = {value : 15}; //1az415
let objb = obja //1az415

console.log("objb", objb);
console.log("obja", obja);
objb.value = 20; 

console.log("objb", objb);
console.log("obja", obja);


//////////////////////////////////////////
//js = (key values)
// window property 
console.log(window);
// document 
console.log(window.document)
console.log(document); 

/////////// xml http request ///////////
let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all"); 
xhr.send();
xhr.onload = function () {
    const data = JSON.parse(xhr.response)
    console.log(data);
    console.log(xhr.status)
}

///////////////////////////////////

