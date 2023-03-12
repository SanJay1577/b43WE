// console log function
const log = (param) => console.log(param); 

//window is a global object
function b(){
log("Hey I'm called")
}

var a = 15;
//log(window.a)
log(a)

let promptElement = document.querySelector("#prompt-element")
//////////////////alert//////////////// 
function alertFunc(message){
    alert(message) // returns nothing
}
//alertFunc("Hello there welcome to js-dom-events")


//////////Prompt//////////////
function promptFunc(){
const names = prompt("Hey tell me your name?", "default"); // returns a string
log(names)
promptElement.textContent = ` Your name is ${names}`
}
//promptFunc()

//////////confirm//////////////
function confirmFunc(){
let response = confirm("Are you intrested?") // returns a true or false
log(response)
promptElement.textContent = ` Your response is ${response}`
}
//confirmFunc()

// accesing the time element for output
let responeEle = document.querySelector("#time-element")

//set time out

let count = 10
function countDown(){
  responeEle.textContent = count
  count--;
 const id = setTimeout(countDown, 1000)
 if (count == 0){
    clearTimeout(id)
    responeEle.textContent = "Hey Your time is done"
 }
}
//countDown()

//set Interval 
let responeIntervalEle = document.querySelector("#interval-element")

let intervalCount = 10
function intervalFunc(){
   let intervalId =  setInterval(()=>{
        responeIntervalEle.textContent = intervalCount;
        intervalCount--;
        if(intervalCount==0){
            clearInterval(intervalId)
            responeIntervalEle.textContent = "Interval is stopped"
        }
    }, 1000)
}

//intervalFunc();

///////////Events///////////////

let clickCounter = 0

function clickEvent(){
  clickCounter++;
  log(`You have clicked the count ${clickCounter} times`)
}




