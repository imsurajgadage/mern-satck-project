const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});

require('./db/conn');   /* Require This file  */
const User = require('./model/userSchema')  // Exporting User Schema

const app = express();

const PORT = process.env.PORT

  

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


app.listen(PORT,()=>{
    console.log(`Server is running from ${PORT}`)
})


// Database URL : mongodb+srv://suraj:<password>@cluster0.qfuix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority