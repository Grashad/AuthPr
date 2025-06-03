const express = require('express')
const app = express()
const bcrypt = require(`bcrypt`)

app.use(express.json())

const users = []

app.get(`/users`, (req,res) => {
res.json(users)
});

app.post(`/users`,async (req,res) => {
    try {
        const hshPassword = await bcrypt.hash(req.body.password, 10)
const user = {name: req.body.name, password: hshPassword }
users.push(user) 
res.status(201).send()
hash(salt + "password")
    }
    catch {
        res.status(500).send()
    }
});


app.listen(3000)