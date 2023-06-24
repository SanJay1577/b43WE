// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "timestamps");
// const app = express();
//  app.use(express.json())
// app.get("/timestamp", (req, res) => {
//   let date = new Date();
//   const timeStampDate = ` Last updated : ${date.toUTCString().slice(0, -3)}`;
//   fs.writeFileSync(
//     `${path.join(dirPath, "current-date-time.txt")}`,
//     timeStampDate,
//     (err) => {
//       if (err) {
//         console.log("err", err);
//       }
//     }
//   );
//   res.sendFile(path.join(dirPath, "current-date-time.txt"));
// });

// // oru sample operatios
// let carData = [
//   {
//     name: "slavia",
//     country: "german",
//     company: "Skoda",
//     fuel: "diesel",
//     type: "manual",
//   },
//   {
//     name: "virtus",
//     country: "german",
//     company: "vokswagon",
//     fuel: "petrol",
//     type: "DSG",
//   },
//   {
//     name: "Verna",
//     country: "Korea",
//     company: "Hyndai",
//     fuel: "petrol",
//     type: "manual",
//   },
//   {
//     name: "city",
//     country: "japan",
//     company: "Honda",
//     fuel: "diese22l",
//     type: "DCT",
//   },
// ];

// // car data api endpoints 
// // get all data with querys
// app.get("/car/all", (req, res)=>{
//     const {type, fuel} = req.query;
//     let returnData = carData;
//     if(req.query){
//         if(type) {
//         returnData  = returnData.filter((val)=>val.type=== type);
//         }
//         if(fuel){
//             returnData = returnData.filter((val)=>val.fuel=== fuel)
//         }
//     }
//     res.json({data : returnData});
// })

// // get data using params
// app.get("/car/:name" ,(req, res)=>{
// const {name} = req.params;
//   const selectedData = carData.find((val)=>val.name === name)
//    res.status(200).json({name : selectedData, company: selectedData})
// })

// app.get("/car/all/spec", (req, res)=>{
//     const selectedInfo = carData.map((val)=> ({name : val.name, company: val.company}))
//     console.log()
//     res.status(200).json({data:selectedInfo})
// })

// app.post("/car/add", (req, res)=>{
//      const newcar = req.body;
//      carData.push(newcar);
//      res.status(201).json({data:carData})
// })

// app.put("/car/edit/:name", (req, res)=>{
//     const {name} = req.params;
//     const selectedCar = carData.find((val)=>val.name===name);
//     selectedCar.type = req.body.type
//     res.status(200).send(selectedCar)

// })

// app.delete("/car/remove/:name", (req, res)=>{
//     const {name} = req.params;
//     console.log(name)
//     const newCarlist = carData.filter((val)=>val.name!==name);
//     carData = newCarlist
//     res.status(200).send({message:`${name} is deleted sucessfully`})
     
// })


// //listen and start a http server in specific port
// app.listen(9000, () => console.log(`Server started in localhost:9000`));


// // {  mathod
// //     body: json.stringly(newContent)
// // }


// // {
// //     id: "2",
// //     numberOfSeats: 100,
// //     amenities: ["Ac", "chairs", "discolights"],
// //     price: 5000,
// //     ifBooked: "false",
// //     customerName: "",
// //     date: "",
// //     startTime: "",
// //     endTime: "",
// //     RoomId: 202,
// //     RoomName: "Duplex",
// //   },