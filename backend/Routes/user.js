import express from "express"
const router = express.Router();


router.post("/signup", (req, res)=>{
    try {
        const user = req.body
        res.send({data:user})
    } catch (error) {
        console.log(error);
        res
        .status(500)
        .json({ message: "Internal server error" });
    }
})


router.post("/login", (req, res)=>{
    try {
        const user = req.body
        res.send({data:user})
    } catch (error) {
        console.log(error);
        res
        .status(500)
        .json({ message: "Internal server error" });
    }
})

export const userRouter = router;