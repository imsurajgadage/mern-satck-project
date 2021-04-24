const express = require('express');

const app = express();

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