// Map filter and Reduce....
// MRF functions

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map 
// map is arry method which returns a new array 
//map(()=>{return []})
console.log(arr)
const tableFive = arr.map((val, idx, accArr)=> val * 5)
const forTable = arr.forEach((val, idx, accArr)=> console.log(val * 5))
console.log(tableFive) //(10) [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
console.log(forTable) // undefined ( it doesn't return an array)


// filter 
// returns an array.
//filter(()=>{ return []})
const filterArray = arr.filter((val, idx, accArr)=> val > 5); 
console.log(filterArray)

// Reduce 
// returns a value
// reduce(()=>{return value}, acc)

const add = arr.reduce((acc, val, index, accArr)=>{
   return  acc + val
},0); 
console.log("reduce returns :", add)

// protype of map 
//map(()=>{return []})
// map(()=>{})

Array.prototype.zenMap = function(fn){
    let arr = [] 
    for(let i=0; i<this.length; i++){
       arr.push(fn(this[i],i,this ))
    }
    return arr
}

 arr.zenMap((val, idx, accArr)=> {
    console.log(`
     values is ${val}
     the index is ${idx}
     actual array is ${accArr}
            `)
})
// prototype for filter
Array.prototype.zenFilter = function (fn){
   let arr = []
   for(let i=0; i<this.length; i++){
    if(fn(this[i], i, this)){
        arr.push(this[i])
    }
   }
   return arr
}

const zenClassFilter = arr.zenFilter((val, idx, accArr)=>val >5);
console.log(zenClassFilter)

// protoTYpe for reduce 
//addsum(5)
   Array.prototype.zenReduce = function(fn, initValue) {
    let acc = initValue
    for (let i=0; i<this.length; i++){
        if(acc){
         acc = fn(acc, this[i], i, this)
        }else{
          acc = this[i]
        }
    }
    return acc
   }

const zenClassReduce = arr.zenReduce((acc, val, idx, accArr)=>{
    return  acc + val
}, 5)
console.log("zenReduce : ", zenClassReduce)

//additional 
const check = arr.includes(); 
console.log(check)


//task 
//const arr = ["sanjay", "arun", "nagaraj"]
// map and filter 
//1. map ("map")
//2. remove sanjay ("filter")


