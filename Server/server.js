const express = require('express')
const bcrypt = require(`bcrypt`)
const mongoose = require("mongoose")
const cors = require("cors")
const strModel = require('/models/testStr')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/testStr")
app.post('/register', (req,res) =>{
    strModel.create(req.body)
    .then(str => res.json(str))
    .catch(err => res.json(err))
})

app.listen(4000, () => {
    console.log("Connection ON")
})