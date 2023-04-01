const mongoose = require('mongoose')

const achievementExtraSchema = mongoose.Schema({
    achievement_id: {
        type: "String",
        required: true,
        unique: true
    }
}, { strict: false })

const achievementExtraModel = mongoose.model("achievementExtra",achievementExtraSchema)

module.exports = achievementExtraModel