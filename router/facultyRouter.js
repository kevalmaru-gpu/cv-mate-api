const mongoose = require('mongoose')
const express = require('express')
const facultyModel = require('../models/faculty')
const achievementModel = require('../models/achievement')

const router = express.Router()

router.post('/login', async (req, res) => {
    const data = req.body

    await facultyModel.findOne( data )
    .then(response => {
        if (response != null)
            res.status(200).json(response)
        else
            throw new Error("Invalid crendential")
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.post('/register', async (req, res) => {
    const data = req.body

    const facultyData = new facultyModel(data)
    facultyData.save()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.post('/get_details', async (req, res) => {
    const { id } = req.body
    await achievementModel.find({ faculty_id: id})
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.post('/get_faculty_details', async (req, res) => {
    const { id } = req.body
    await facultyModel.findOne({ _id: id})
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.post('/delete', async (req, res) => {
    const data = req.body
    try{
        await facultyModel.deleteOne( data )
        .then(response => {
            res.status(200).json(response)
        })
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.get('/get_all', async (req, res) => {
    await facultyModel.find({})
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})



module.exports = router