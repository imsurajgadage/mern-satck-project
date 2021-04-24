const express = require('express')

const router = express.Router();


router.get("/",(req,res)=>{
    res.send("Hello from Home Page")
})

router.post("/register", (req,res)=>{
    console.log(req.body)
    res.json({message: req.body})
})



module.exports = router;


/*  
{
    "name": "Suraj",
    "email": "suraj@applore.in",
    "phone": "7709879278",
    "work": "MERN-Developer",
    "password": "suraj",
    "cpassword": "suraj"

}
*/