const fs = require("fs")
const os = require("os");
const { dirname } = require("path");

console.log(process.argv);
// get value from command line argument 
const [, ,name2, name3 ] = process.argv;
console.log("command line value is ", name2, name3);
// reading a file from your computer 

fs.readFile("./sampleFile.txt","utf-8",(err, data)=>{
    if(err){
        console.log(err)
    }else {
        console.log(data)
    }
} )

const content = "I'm writting a new file"

fs.writeFile("./newfile.txt", content, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file writted successfully")
    }
})

const content2 = "\nI'm writting a new file 2"
// appending a file 
fs.appendFile("./newfile.txt", content2,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file updated successfully")
    }
}); 

fs.unlink("./newfile.txt", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File deleted sucessfully")
    }
})


// files using directory 

console.log("Current working filename name", __filename);
console.log("Current working directory name", __dirname);



// os informations

console.log("free memory", os.freemem())
console.log("Version", os.version())
console.log("Total memory", os.totalmem())
console.log("Cpu---", os.cpus())


/// Date packages..
let time = Date.now();
console.log("Time", time)
const date = new Date();
console.log("Date----", date)
console.log("Today----", date.getDate())
console.log("Month----", date.getMonth())
console.log("Year----", date.getFullYear())
console.log("UTCString----", date.toUTCString().slice(0,17))



