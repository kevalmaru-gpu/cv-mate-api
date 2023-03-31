const mongoose = require('mongoose')

const student = mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    email: {
        type: 'String'
    },
    gender: {
        type: 'String'
    },
    dob: {
        type: 'Date'
    },
    phone_number: {
        type: 'String'
    },
    semester: {
        type: 'Number',
        required: true
    },
    enrollment_number: {
        type: 'String',
        required: true,
        unique: true
    },
    branch: {
        type: 'String',
        required: true
    },
    password: {
        type: 'String',
        require: true
    },
    bio: {
        type: 'String'
    }
})

const studentModel = mongoose.model('students', student)

module.exports = studentModel