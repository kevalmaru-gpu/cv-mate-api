const mongoose = require('mongoose')

const facultySchema = mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    field: {
        type: "String",
        require: true
    },
    email: {
        type: "String",
        require: true,
        unique: true
    },
    password: {
        type: "String",
        required: true
    }
})

const facultyModel = mongoose.model("faculty",facultySchema)

module.exports = facultyModel