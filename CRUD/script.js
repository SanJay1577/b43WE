
document.addEventListener("DOMContentLoaded", ()=>{
console.log("crud application is started")
// operations in html 
const studentList = document.querySelector("#student-list");
const studentForm = document.querySelector(".add-student-form");
const addBtn = document.querySelector("#new-stud-btn");
let addStuent = false;

let API = "https://6427aa3446fd35eb7c437e60.mockapi.io/students";
console.log(API)

// CRUD - Create, Read, Update, delete ()

// Read - (GET)

function ReadAllData(){
    fetch(API, {
        method : "GET"
    })
    .then((response)=>response.json())
    .then(((data)=>renderAllStudents(data)))
    .catch((err)=>console.log(err))
}

ReadAllData();

// Create our data - (POST)

let newStudentData = {
    name : "sanjay",
    batch : "b43WE",
    age : 25
}

function CreateData(newStudentData){
    fetch(API, {
        method : "POST",
        body : JSON.stringify(newStudentData),
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        },
    })
    .then((response)=>response.json())
    .then((data)=>rederStudent(data))
    .catch((err)=>console.log(err))
}

//CreateData(newStudentData);

// update part = (PUT)

function UpdateData(){
    let editStudentData= {
       name : "sanjay",
       batch : "B43WD"
    }

    fetch(`${API}/6`, {
        method : "PUT",
        body : JSON.stringify(editStudentData),
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

//UpdateData();

// Delete Operation - (DELETE)

function DeleteData(id, parent){
    fetch(`${API}/${id}`, {
        method: "DELETE",
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
    .then(()=>parent.remove())
    .catch((err)=>console.log(err))
}

//DeleteData();


addBtn.addEventListener("click", ()=>{
    addStuent = !addStuent
    if(addStuent){
        studentForm.style.display = "block"
        addBtn.textContent = "Add and close"
    }else {
        studentForm.style.display = "none"
        addBtn.textContent= "Add Student"
    }
})

function rederStudent(stud){
  const studentDiv = document.createElement("div");
  studentDiv.className = "card";
  studentDiv.innerHTML += `
   <h2>${stud.name}</h2>
   <p><span>Batch : </span>${stud.batch}</p>
   <p><span>Age : </span>${stud.age}</p>
   <button data-id="${stud.id}" class ="del-btn">Delete</button>
  `;

   studentList.appendChild(studentDiv);
}


// render all students data 

function renderAllStudents(students){
    studentList.innerHTML = "";
   students.forEach((stud)=>{
    rederStudent(stud)
   })
}

studentList.addEventListener("click", (event)=>{
    event.preventDefault(); 
 if (event.target.className === "del-btn"){
    let id = event.target.dataset.id;
    let parent = event.target.parentNode;
     DeleteData(id, parent)
 }
})

studentForm.addEventListener("click", (event)=>{
    event.preventDefault()
    //console.log(event)
    let name = document.getElementsByClassName("input-text")[0].value;
    let batch = document.getElementsByClassName("input-text")[1].value;
    let age = document.getElementsByClassName("input-text")[2].value;
    let data = {
        name : name,
        batch : batch,
        age : age
    }
    if(event.target.name === "submit"){
        if(name === "" || batch === "" || age ===""){
            alert("please fill all fields ")
        }else {
        CreateData(data)
        }
    }
})

ReadAllData();

//keypress and keydown
})