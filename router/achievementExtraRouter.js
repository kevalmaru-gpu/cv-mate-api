const express = require('express')
const mongoose = require('mongoose')
const achievementExtraModel = require('../models/achievementExtra')

const addExtraAchievement = async (data) => {
    const achievementExtraData = new achievementExtraModel(data)
    await achievementExtraData.save()
    .then(response => {
        return response
    })
    .catch(err => {
        return err
    })
}

const getExtraAchievement = async (_id) => {
    const extraData = await achievementExtraModel.findOne({ achievement_id: _id})
    .then(response => {
        return { status: "success", data: response }
    })
    .catch(err => {
        return { status: "error", data: err }
    })

    return extraData
}

module.exports = { addExtraAchievement, getExtraAchievement}