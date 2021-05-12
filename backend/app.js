const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});

require('./db/conn');   /* Require This file  */

const User = require('./model/userSchema')  // Exporting User Schema



const app = express();

app.use(express.json())

const PORT = process.env.PORT

app.use(require('./router/auth'))  // Linking ROUTER Files
  
// Middleware

app.listen(PORT,()=>{
    console.log(`Server is running from ${PORT}`)
})


// Database URL : mongodb+srv://suraj:<password>@cluster0.qfuix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority