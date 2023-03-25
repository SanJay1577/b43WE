const log = (name) => console.log(name)

let guviTaskCompletion = 60;
log("execution started")

// producer of a promise 
let placementPromise = new Promise(
    (resolve, reject)=>{
    setTimeout(()=> {
        if(guviTaskCompletion >= 75 ){
            resolve("You're placement process is initiated")
        }else {
            reject("Rejected : You have not completed the required task")
        }
    }, 3000)
    }
)

let chainPromise = new Promise(
    (resolve, reject)=>{
        setTimeout(()=>{
            resolve(25)
        }, 1000)
    }
)

//always returns something say a resolve or reject
// consumer of a promise
placementPromise
.then((s)=>console.log(s))
.catch((e)=>console.log(e))

//chaning of a promise 
chainPromise.then((val1)=>{
    log(`val1 : ${val1}`)
    return val1*2;
}).then((val2)=>{
    log(`val2 : ${val2}`)
    return val2*3
}).then((val3)=>{
    log(`val3 : ${val3}`)
}).catch((err)=>log(err))

// promise 1  functionality
let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        log("Promise 1 is called")
         resolve (25)
        // reject("rejected your promise")
    }, 4000)
})

// promise 2  functionality
let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        log("Promise 2 is called")
        resolve(50)
    }, 6000)
})

// promise 3  functionality
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        log("Promise 3 is called")
        resolve(100)
    }, 9000)
})

// Promise.all method to club all promises
// all the promises should be resolved or else it will be rejected
Promise.all([promise1, promise2,promise3])
.then((value)=>{
    log(`The value from the promise is :${value}`)
}).catch((err)=>{
    log(`Eroor occured : ${err}`)
})


// get in order -> name -> age - verifyfunc()
// changing normal function to a promise
function getName(name) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           if(name.length == 0){
            reject("Please pass a valid name")
           }else {
            resolve(name)
           }
        }, 2000)
    })
}

function getAge(name){
    log(`Hi ${name} please tell your age`)
}

function verifyNameAndAge(name, age){
    setTimeout(()=>{
      log(`Hi ${name} we got your age as ${age}`)
    }, 2000)
}

getName("sanjay")
.then((res)=>{
    log(`The name entered is ${res}`)
    return res
})
.then((resName)=> {
    getAge(resName)
    return resName
})
.then((resData)=> verifyNameAndAge(resData, 25))
.catch((err)=>log(err))

//fetch data 

fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=>{
    log(data)
    data.forEach(ele => {
   const createCountryObject = {
    ...ele,
    name : ele.name.common,
    flags : ele.flags.png,
    population : ele.population,
    region : ele.region,
    capital : ele.capital
   }  
    createCountry(createCountryObject)
    })
})
.catch((err)=>log(err))

function createCountry(elements){
    document.body.innerHTML += `
    <div class="container">
    <img src = "${elements.flags}" alt="${elements.name}" class = "flag"/>
    <div class="info">
    <h2>${elements.name}</h2>
    <p><span>Population : ${elements.population} </span></p>
    <p><span>Region : ${elements.region} </span></p>
    <p><span>Capital : ${elements.capital} </span></p>
    </div>
    </div>
    `
}