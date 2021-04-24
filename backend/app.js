const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello from Home Page")
})

app.get("/about",(req,res)=>{
    res.send("Hello from About Page")
})


app.listen(3001,()=>{
    console.log("Server is running from 3001")
})