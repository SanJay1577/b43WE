const log = (param) => console.log(param); 
/// first class functions '

function mulByTwo (num) {
    return num*2

}
// mulByTwo(num)
function displayfirstClass (f){
    // f is function f() && return f()
    log("The multiplied value is" , f(5))
    return f;
}
//displayfirstClass(mulByTwo)
 log(displayfirstClass(mulByTwo))

////// Arrow functions //////

var arrow = (num) => num * 2; 
log('The arrow function :', arrow(5))

///////////////////////////for iteratives///////////////////////////

log(".....................Iteratives initilized ................")

const studentArr = ["sanjay", "ajay", "anbu", "rajarajan"]; 

for(let i=0; i<studentArr.length; i++){
    console.log(studentArr[i], i)
}

const studentObj = 
    {
        name : "chandru",
        age : 25,
        isMentor : true,
    }
    console.log(studentObj["name"])

    // only keys 
    var studentKeys = Object.keys(studentObj)
    console.log("keys are", studentKeys);

    var studentvalues = Object.values(studentObj); 
    console.log("values", studentvalues)
   log("................Based on keys..................") 
   /// accesing with keys///
    for(let i=0; i<studentKeys.length; i++){
        console.log(studentKeys[i] , studentObj[studentKeys[i]])
    }
    log("................Based on values..................") 
  // accesing only values////
    for(let i=0; i<studentvalues.length; i++){
        console.log(studentvalues[i])
    }
log("................for each, for in, for of..................") 
log("................For Each Loops..................") 
// only accesible for array 
// best used in iterating a array value
log(".................for loop example............")
for(let i=0; i<studentArr.length; i++){
    console.log(studentArr[i], i)
}

log("................For Each Loops example ..................") 

studentArr.forEach((student, index)=>{
    console.log(student , index); 
    })


log("................For Each Loops object example ..................") 
studentKeys.forEach((val, idx, accArr)=>{
    console.log(studentObj[val])
})

log(".........................for in ...................")
// accesible for objects 
// best used in iterating a object value


// in array only index
for(s in studentArr) {
    console.log(studentArr[s] , s);
}

// in objects iterations 
console.log(studentObj);

for(obj in studentObj) {
     if (obj == "name") {
        studentObj[obj] = "c"
     }
    console.log("Keys :",obj , "values :" , studentObj[obj]); 
}

console.log(studentObj);

log(".........................for of ...................")
//array , string 
// best used in iterating a string value
var stringer = "stringer"

for(arr of studentArr) {
    console.log(arr, studentArr[arr]);
}

for (k of studentKeys){
    console.log(k, studentObj[k])
}

for (str of stringer){
    console.log(str)
}


// JSON is nothing but a object 
// Javascript object notation 
// {
//     name : sanjay
// }
//