import express from "express";
import bcrypt from "bcrypt";
import { addUser, generateToken, getUser } from "../Controllers/user.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    //hashing user password.
    const salt = await bcrypt.genSalt(10);
    const user = await getUser(req.body.email);
    //validating if user already exist
    if(!user){
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const hashedUser = await { ...req.body, password: hashedPassword };
    const result = await addUser(hashedUser);
    // checking mongodb acknowledgement
    if(!result.acknowledged){
        return res.status(404).json({message:"Error uploading user information"})
    }
    return res.status(201).json({data:hashedUser});
    }
    res.status(400).json({message:"Email already exist"});

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async(req, res) => {
  try {
    //user exist validations
    const user = await getUser(req.body.email);
    if(!user){
        return res.status(404).json({message:"Invalid Email"})
    }
    // validating password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword){
        return res.status(400).json({message:"Invalid Password"})
    }
    const token = generateToken(user._id);
    res.send({ data: user, token :token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export const userRouter = router;
