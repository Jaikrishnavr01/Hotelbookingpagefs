const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors');


const Rooms = require('./Routers/Rooms')
const users = require('./Routers/users')

const app = express()
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/habibi")

mongoose.connection.on("connected" , () => {
    console.log("connected to database")
} )

app.get('/', (req,res)=>{
    res.send("hello world")
})

app.use('/rooms', Rooms)
app.use('/users', users)

app.listen(3001 , () => {
    console.log("listening on port 3001 ");
})