const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: false
    },
    designation:{
        type:String,
        required: false
    },
    company: {
        type:String,
        required: true
    },
    info: {
        type:String,
        required: true
    },
    interest: {
        type:String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);