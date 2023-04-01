const express = require('express')
const mongoose = require('mongoose')
const achievementModel = require('../models/achievement')
const {addExtraAchievement,getExtraAchievement} = require('../router/achievementExtraRouter')

const router = express.Router()

router.post('/get_achievement', async (req, res) => {
    const { enrollment_number } = req.body

    await achievementModel.find({ enrollment_number: enrollment_number })
    .then(async response => {
        const data = await Promise.all(response.map(async data => {
            const { _id } = data
            const extraData = await getExtraAchievement(_id)
            if (extraData.status === "success"){
                const newData = {
                    data: data,
                    extraData: extraData.data
                }

                return newData
            }
            else{
                return newData = {
                    data: data,
                    extraData: {}
                }
            }
        }))
        
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.post('/add_achievement',async (req, res) => {
    const { data, extraData } = req.body

    const achievementData = new achievementModel(data)
    await achievementData.save()
    .then(response => {

        const { _id } = response
        extraData.achievement_id = _id

        try{
            addExtraAchievement(extraData)
        }
        catch{
            res.status(400).json("Error adding extra data")
        }

        res.status(201).json(response)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.post("/get_achievements", (req, res) => {
    const { enrollment_number } = req.body

    achievementModel.find({ enrollment_number: enrollment_number })
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

module.exports = router