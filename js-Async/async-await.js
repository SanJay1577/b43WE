// process of functions

function insertCard(cardDigits){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (cardDigits.length<5){
                reject("Invalid Card")
            }else if(cardDigits.length<7){
                console.log("Inserted a valid card")
                resolve("savings card")
            } else{
                console.log("Inserted a valid card")
                resolve("current account")
            }
        }, 2000)
    })
}

function selectAccount(cardType){
  console.log(`${cardType} is selected`)
}

function selectOptions(option){
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    if(option == "withdraw"){
        resolve("withdraw")
        console.log(`You selected ${option}`)
    }else if(option == "debit"){
        resolve("debit")
        console.log(`You selected ${option}`)
    }else {
        reject("please select debit or withdraw")
    }
   })
}, 4000)
}

function enterSecurityPin(optionSelected){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(optionSelected == "withdraw"){
                resolve("Enter Security pin to withdraw cash")
            }else if(optionSelected == "debit"){
                resolve("Enter security pin to debit cash")
            }else {
                reject("error occured")
            }
        }, 4000);
    })
}

function greetings(){
    setTimeout(()=>{
    console.log("Thanks for choosing our bank")
    }, 4000)
}

// async and await 
//step 1 : use asyn before a function 
// step 2 : use await where you wanted to wait 
async function operateBankATM(cardNumber, options){
    //step3 use a variable to capture the return value
    // erro handling use try catch 
    try {
        const cardType =  await insertCard(cardNumber)
        selectAccount(cardType);
        const optionSelected =  await selectOptions(options)
        const choosed = await enterSecurityPin(optionSelected)
        console.log(choosed)
        greetings();
        
    } catch (error) {
        console.log(error)
    }
}

//operateBankATM("125457", "debit")


async function fetchData(){
    try {
       const response = await fetch("https://restcountries.com/v3.1/all")
       const data = await response.json();
       if(data.message){
        document.body.innerHTML += `<h1> ${data.message}</h1>`
        document.body.style.color = "crimson"
       }
       data.forEach(ele => {
        const createCountryObject = {
         ...ele,
         name : ele.name.common,
         flags : ele.flags.png,
         population : ele.population,
         region : ele.region,
         capital : ele.capital
        }  
         createCountry(createCountryObject);
    }) 

    } catch (error) {
        console.log(error)
    }
}



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

fetchData()