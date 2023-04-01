const mongoose = require('mongoose')

const achievementSchema = mongoose.Schema({
    title: {
        type: "String",
        required: true
    },
    faculty_id: {
        type: "String",
        required: true
    },
    faculty_name: {
        type: "String",
        required: true
    },
    enrollment_number: {
        type: "String",
        required: true
    },
    major_activity: {
        type: "String",
        required: true
    },
    sub_activity: {
        type: "String",
        required: true
    },
    description: {
        type: "String"
    },
    event_date: {
        type: "Date"
    },
    level: {
        type: "String"
    },
    winner: {
        type: "Boolean"
    }
})

const achievementModel = mongoose.model("achievement", achievementSchema)

module.exports = achievementModel