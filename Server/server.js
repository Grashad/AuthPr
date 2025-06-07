const express = require('express')
const bcrypt = require(`bcrypt`)
const mongoose = require("mongoose")
const cors = require("cors")
const strModel = require('./models/DBstorage')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/testStr")
app.post("/login",(req, res) => {
const {username,password} = req.body;
strModel.findOne({username: username})
.then(user => {
    if(user) {
    if(user.password === password) {
        res.json('success')
    }
    else {
        res.json("Password Incorrect")
    }
}
else {
    res.json("user does not exists")
}
})
})

        




app.post('/register', (req,res) =>{
    strModel.create(req.body)
    .then(str => res.json(str))
    .catch(err => res.json(err))
})

app.listen(4000, () => {
    console.log("Connection ON")
})