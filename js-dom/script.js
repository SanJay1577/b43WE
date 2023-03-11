
// creating an element 

let newElement = document.createElement("div");


// setting an attribute 
newElement.setAttribute("class", "js-class")
newElement.setAttribute("id","js-id")

//accessing elements
let inbuildElement = document.getElementById("dom-id")
let inbuildElement2 = document.getElementsByClassName("dom-class")


// accesing using query selector 
let queryElement = document.querySelector('.query-class')

queryElement.style.color = "white"

// accesing using querySelectorAll
let queryElementAll = document.querySelectorAll('.query-class')

console.log(queryElementAll)
const colors =  ["blue", "green", "yellow", "orange"]
for(let i=0; i<queryElementAll.length; i++){
    console.log(queryElementAll[i])
    queryElementAll[i].style.backgroundColor = colors[i]
}

// adding inner text and inner html or textcontent
  
newElement.innerText = `hello i'm from js`

 queryElement.innerText+=`New content          again another content`

 console.log("Inner Text: ", queryElement.innerText); 

 console.log("Text Content :", queryElement.textContent);


 newElement.innerHTML += `
 <h1>New Element </h1>
 <p>hey im ceated by javascript dom manupulation</p>
 `

//  newElement.textContent = `text content             added`

//appending the content

document.body.append(newElement)

const newDiv = document.createElement("div")
newDiv.setAttribute("id", "applied-div"); 
newDiv.textContent = `Hey I'm newly added div using append`

//append it 
newElement.append(newDiv, "hey there")

// append child
//newElement.appendChild(newDiv)


console.log(queryElement)


console.log(inbuildElement2)

console.log(inbuildElement)

console.log(newElement)


//////////////////

// create a element 
// set an attribute 
// and access exiting element 
