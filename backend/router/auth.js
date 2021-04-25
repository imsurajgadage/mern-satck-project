const express = require("express");

const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello from Home Page");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Fill The All Fields!" });
  }

  try {
    const userExits = await User.findOne({ email: email });

    if (userExits) {
      return res.status(422).json({ error: "Email Already Exits!" });
    }

    const user = new User({ name, email, phone, work, password, cpassword });

    const userRegister = await user.save();

    if (userRegister) {
      res.status(201).json({ message: "Registration Successful!" });
    } else {
      res.status(500).json({ error: "Failed to register" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post('/signin',async(req,res)=>{
  try{
    const {email, password} = req.body
    if(!email || !password){
      return res.status(400).json({error: 'Please Filled The Data'})
    }

    const userLogin = await User.findOne({ email : email });
    console.log(userLogin); /* We get all the data */

    if(!userLogin){
      res.status(400).json({error :'User Error'})
    }else{
      res.json({message: 'User Login Successful'})
    }
  }catch(err){
    console.log(err)
  }

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
