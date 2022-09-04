const express = require('express');
const mongoose = require('mongoose');
const taskRoute = require('./routes/task-route')
const bodyParser = require('body-parser')
const app =  express();

const port = 8080;

mongoose.connect("mongodb+srv://root:root@aarzoocluster.6pwhj.mongodb.net/iitworkshop", (err) => {
    if(err) {
        console.log("Db not connecting")
    }else{
        console.log("Db connected")
    }
})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/task', taskRoute)

app.listen(port, () => {
    console.log("server is connected : "+ port)
})