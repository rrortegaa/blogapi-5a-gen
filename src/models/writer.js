const mongoose = require('mongoose')

const writerSchema = new mongoose.Schema ({
    name: {
        type: String,
        maxlength: 30,
        required: true
    },
    age: {
        type: Number,
        min: 1,
        required: true
    },
    email: {
        type: String,
        maxlength: 25,
        required: true
    },
    photo: {
        type: String,
        required: true,
        maxlength: 300
    }
})

module.exports = mongoose.model('Writer', writerSchema)