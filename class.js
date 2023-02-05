//  factory methods 
function createCar(color, model, brand) {
return {
    color,
    model,
    brand,
    getColor : function(){
        console.log(`The data you asked is ${color}`)
    },
    getModel : function(){
        console.log(`The data you asked is ${model}`)
    },
    getBrand : function(){
        console.log(`The data you asked is ${brand}`)
    }
}
}

// constructor methods 
function Car(color, model, brand){
    this.color = color; 
    this.model = model; 
    this.brand = brand; 

}



// prototypes 
Car.prototype.getColor = function (){
    console.log(`The data you asked is ${this.color}`)
}

Car.prototype.getModel = function (){
    console.log(`The data you asked is ${this.model}`)
}

Car.prototype.getBrand = function (){
    console.log(`The data you asked is ${this.brand}`)
}

Car.prototype.carDetails = function (){
    console.log(`the brand is ${this.brand} and 
                 the model is ${this.model} and 
                 the color is ${this.color} `)
}

const conVechicle = new Car("balck", "slavia", "Skoda"); 
const conVechicle2 = new Car("white", "city", "Honda");
conVechicle.getColor();
conVechicle2.carDetails();
console.log(conVechicle);
console.log(conVechicle2)


const vechicle1 = createCar("red", "i20", "Hyndai")
const vechicle2 = createCar("grey", "jazz", "Honda"); //


var name = "sanjay"


// console.log(this.name)

// normal function targets parent obj 
// arrow function targets global to that method where it is called.
let user  = {
    name: "raj",
    age : 24,
    nestedObj : {
        name : "raghul",

        normaDetails(){
         console.log("I'm, normal", this.name)

         const arrowinObj = () => {
          console.log("object inside", this.name)
         }
         arrowinObj(); 
        },
        getDeatils : () => {
            console.log("I'm, arrow", this.name)
          }
    }
  
}
//console.log(this);
user.nestedObj.normaDetails();
user.nestedObj.getDeatils();


// classes 

class Student {
    constructor(name, batch, week) {
        this.name = name;
        this.batch = batch;
        this.week = week;
    }
// methods or business logics 
    onlyDetails (){
        console.log(`The name of the student is ${this.name}
        The batch is ${this.batch}
        The class type is ${this.week}
        `)
    }
}

// placedcompany
class Placement extends Student {
    constructor(name, batch, week, company) {
        super(name, batch, week)
        this.company = company
    }

    getDeatils(){
        console.log(`The name of the student is ${this.name}
        The batch is ${this.batch}
        The class type is ${this.week}
        Placed Company is ${this.company}
        `)
    }
}


const studentsOne = new Student("Lokesh", "B43", "Weekend")
studentsOne.company = "amazon";
const placedStudent = new Placement("Keerthana", "B43", "Weekend", "Google"); 
console.log(placedStudent);
placedStudent.getDeatils();
placedStudent.onlyDetails();
console.log(studentsOne);
