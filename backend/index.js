const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const app = new express();


// database
mongoose.connect("mongodb+srv://mern123:rahul@cluster0.tzajwgz.mongodb.net/ICTAK?retryWrites=true&w=majority")
.then(()=>{
    console.log("Database Connected");
})
.catch(err=>console.log(err));

// midleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

// route
const commentsRouter = require('./router/ictak'); // Update the path to your comments.js file
app.use('/', commentsRouter);

// port
app.listen(4010,()=>{
    console.log("App is running in port 4010");
})
