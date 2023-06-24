import express from "express";
import { studentRouter } from "./Routes/students.js";

const PORT = 9000;

// initiating a server
const app = express();

//middle wares
app.use(express.json());

//application middlewares
app.use("/student", studentRouter)

// listen a server
app.listen(PORT, ()=>console.log(`Server started in localhost:${PORT}`))
