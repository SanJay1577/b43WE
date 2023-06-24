import express from "express";
import { getAllStudent, getStudentById } from "../Controllers/students.js";

//Initializing the routes
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    if(req.query.task){
      req.query.task = parseInt(req.query.task)
    }
    const students = await getAllStudent(req);
    if (students.length === 0) {
      return res
      .status(400)
      .json({ message: "No data available" });
    }
    res
    .status(200)
     .json({ data: students });
  } catch (error) {
    console.log(error);
    res
    .status(500)
    .json({ meesage: "Internal server error" });
  }
});

router.get("/all/:id", async (req, res)=>{
    try {
        const {id} = req.params;
        const student = await getStudentById(id);
        if(!student) {
          return res.status(400).json({meesage:"No data available"})
        }
        return res.status(200).json({data: student})
    } catch (error) {
      console.log(error);
      res
      .status(500)
      .json({ meesage: "Internal server error" });
    }
})
export const studentRouter = router;
