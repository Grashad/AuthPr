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

app.post("/users/login", async (req,res) => {
    const user = users.find(item => item.name === req.body.name)
    if(user == null) {
        return res.status(400).send("auth failed")
    }
    try {
     if(await bcrypt.compare(req.body.name, user.password)) {
        res.send("success")
     }
     else {
        res.send("Not allowed")
     }
    }
    catch {
        res.status(500).send()
    }
}); 

app.listen(3000)