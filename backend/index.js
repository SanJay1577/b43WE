import express from "express";
import dotenv from "dotenv"
import { studentRouter } from "./Routes/students.js";
dotenv.config();
const PORT = process.env.PORT

// initiating a server
const app = express();
// configuring env variables 
//middle wares
app.use(express.json());

//application middlewares
app.use("/student", studentRouter)

// listen a server
app.listen(PORT, ()=>console.log(`Server started in localhost:${PORT}`))
