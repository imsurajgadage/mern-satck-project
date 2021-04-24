const express = require('express');
const mongoose = require('mongoose');


const app = express();
const DB = 'mongodb+srv://suraj:suraj@cluster0.qfuix.mongodb.net/mernstack?retryWrites=true&w=majority'

mongoose.connect(DB,{
useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology: true,
useFindAndModify: false
}).then(()=>{
            console.log(`Connection Successful`)
            }).catch((err)=>{
                console.log(`No Connection`)
            })

// Middleware

const middleware = (req,res,next) =>{
    console.log(`Hello muy Middleware`)
    next()
}

app.get("/",(req,res)=>{
    res.send("Hello from Home Page")
})

app.get("/about", middleware, (req,res)=>{
    res.send("Hello from About Page")
})

app.get("/contact",(req,res)=>{
    res.send("Hello from Contact Page")
})

app.get("/signin",(req,res)=>{
    res.send("Hello from Signin Page")
})

app.get("/signup",(req,res)=>{
    res.send("Hello from Signup Page")
})


app.listen(3001,()=>{
    console.log("Server is running from 3001")
})


// Database URL : mongodb+srv://suraj:<password>@cluster0.qfuix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority