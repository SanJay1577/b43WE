const log = (params) => console.log(params);

//log("working")

function insertCard(callback) {
  log("Step 1 :Insert your card");
  setTimeout(callback, 2000)

}

function selectAccount(callback) {
 log("Step 2 :Selected saving account")
 callback()

}

function selectOptions(callback) {
  log("Step 3 :Selected the wihdraw option");
  setTimeout(callback, 2000)
}

function enterSecurityPin(callback) {
   log("Step 4 :Entered the security pin")
   callback()
}

function collectTheCash() {
  log("Step 5 :Collected the cash amount");
}

function winthdrawCashFromBank() {
insertCard(()=>{
    selectAccount(()=>{
        selectOptions(()=>{
            enterSecurityPin(()=>{
                collectTheCash();
            })
        })
    })
})
}

winthdrawCashFromBank();



//js of sync - async 
//1) callbacks
//2)call bcak hell