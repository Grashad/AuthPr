const mongoose = require('mongoose')




const StrSchema = new mongoose.Schema({
    
    name: String,
    email: String,
    password: String,
})

const strModel = mongoose.model("testStr" , StrSchema)
module.exports = strModel