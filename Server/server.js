const express = require('express')
const bcrypt = require(`bcrypt`)
const mongoose = require("mongoose")
const cors = require("cors")
const strModel = require('./models/DBstorage')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/testStr")
app.post("/login", (req, res) => {
    const { name, password } = req.body;
    strModel.findOne({ name: name })
        .then(user => {
            if(user !== null) {
            bcrypt.compare(password, user.password, (err,response) => {
                if (response === false) {
                    res.json("login data incorrect")
                }
                if (response === true) {
                    res.json("Welcome")
                }
                if(err) {
                    res.json(err)
                }
            })
        }
         else {res.json("login data incorrect")}   
        })
})





app.post('/register', (req, res) => {
    const { email, name, password } = req.body
    strModel.findOne({ name: name},{email: email})
        .then(user => {
            if(user === null) {
                bcrypt.hash(password, 10)
                    .then(hash => {
                        strModel.create({ name: name, email, password: hash })
                            .then(str => res.json(str))
                            .catch(err => res.json(err))
                    })
                    .catch(err => console.log(err))
            }
            else {
                res.json("user already exists")
            }
        })



})

app.listen(4000, () => {
    console.log("Connection ON")
})