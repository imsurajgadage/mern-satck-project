const express = require("express");

const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello from Home Page");
});

/* Using Promises */

// router.post("/register",  async(req,res)=>{
//     const {name, email, phone,work,password,cpassword} = req.body
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error: 'Fill The All Fields!'})
//     }

//     User.findOne({email:email})
//     .then((userExits)=>{
//         if(userExits){
//             return res.status(422).json({error: 'Email Already Exits!'})
//         }

//         const user = new User({name, email, phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message: 'Registration Successful!'})
//         })
//         .catch((err)=> res.status(500).json({error: 'Failed to register'}))

//     }).catch((err)=> {console.log(err)})
// })

/* Using async await */

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
