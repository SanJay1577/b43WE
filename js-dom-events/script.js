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

let clk_btn = document.querySelector("#event-click");

function clickedButtton(){ //verb
  console.log("clikced the button")
}

// add event setup
// Object.addEventListener("click", ()=>{

// })
// add event listener 
let addEvent_btn = document.querySelector("#add-event"); 

addEvent_btn.addEventListener("click", ()=>{
  console.log("add-event-button clicked")
  const result = input_box.value;
  formElement.textContent = eval(result);
})

// window.addEventListener("click", ()=>{
//   console.log("window is clicked")
// })

//Difference 4 essential events 
// 1--- window events 
    // - scroll
    // - resize 
// 2 --- form events 
//  - focus 
//  - blur
//  - change 
//  - input
//  -submit 
//  -click
 //3 --- key board Events
//  -keydown
//  -keyPress 
//  - keyup 
  //4 --- mouse events
  // mouseDown
  // mouseup
  // mousemove

  // window events 
  let demo_result = document.querySelector("#res-content") 
let windowCount = 0;
  window.addEventListener("scroll", ()=>{
     windowCount++;
     console.log("Hey there I', scrolled ", windowCount)
  })

window.addEventListener("resize", (event)=>{
  //console.log(event)
  demo_result.textContent = ( `the width of the screen ${event.target.innerWidth}
              the height of the screen ${event.target.innerHeight} ` )
})

// form event 

let inputArea = document.createElement("textarea"); 
inputArea.setAttribute("id", "mes-area");

let validationString = document.createElement("div");
validationString.setAttribute("id", "message-validate");

inputArea.style.width = "300px";
inputArea.style.height = "200px";
let maximumChar = 100;

inputArea.addEventListener("input", ()=>{
 const remaningAllowedChar = maximumChar - inputArea.value.length
 console.log(remaningAllowedChar); 
 const styledColor = remaningAllowedChar < 20 ? "red" :"green" 
 validationString.textContent = `Remaining allowed Char is ${remaningAllowedChar}`
 validationString.style.color = styledColor
 if (remaningAllowedChar == 0){
  alert("Hey stop typing")
 }
})

const formElement = document.createElement("div");

//submit event
let selct_form = document.getElementById("form-id");

selct_form.addEventListener("submit", (event)=>{
  // stop refrehing the pages
  event.preventDefault()
  formElement.textContent = inputArea.value;
  console.log("submited")
})

let input_box = document.createElement("input")

//mouse events 
// window.addEventListener("mouseup", ()=>{
//   document.body.style.background = "coral"
// })

// window.addEventListener("mousedown", ()=>{
//   document.body.style.background = "crimson"
// })

window.addEventListener("mouseout", ()=>{
 demo_result.textContent = ""
})

window.addEventListener("mousemove", (e)=>{
  demo_result.textContent = `
  The X cordinates : ${e.clientX}
  The Y axis Cordinates : ${e.clientY}
  `
})

document.body.append(inputArea, validationString, formElement, input_box)