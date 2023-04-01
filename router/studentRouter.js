const express = require('express')
const studentModel = require('../models/student')
const mongoose = require('mongoose')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({be: 'good'})
})

router.post('/verify_id', async (req, res) => {
    const { id } = req.body
    
    try{
        await studentModel.findOne({ _id: new mongoose.Types.ObjectId(id) })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err))
    }
    catch(err){
        res.status(400).json({message: "Profile not found."})
    }
})

router.post('/login', async (req, res) => {
    const data = req.body
    const { enrollment_number, password } = data


    await studentModel.findOne({ enrollment_number: enrollment_number, password: password })
    .then(response => {
        if (response === null)
            throw new Error("Invalid crential.")
        else
            res.status(200).json({message: "User found.", id: response._id})
    })
    .catch(err => res.status(400).json({message: "User not found."}))
})

router.post('/register', async (req, res) => {
    const data = req.body
    const studentDetails = new studentModel(data)
    
    await studentDetails.save()
    .then(model => {
        res.status(201).json("Data successfully added.")
    })
    .catch(err => {
        res.status(400).json({message: "Error adding data."})
    })
})

router.post('/get_details', async (req, res) => {
    const { id } = req.body
    
    try{
        await studentModel.findOne({ _id: new mongoose.Types.ObjectId(id) })
        .then(data => {
            if (data === null){
                throw new Error("Invalid verification")
            }
            else{
                res.status(200).json(data)
            }
        }
        )
        .catch(err => res.status(400).json(err))
    }
    catch(err){
        res.status(400).json({message: "Profile not found."})
    }
})

router.post('/update_details', async (req, res) => {
    const data = req.body

    try{
        await studentModel.updateOne({ _id: new mongoose.Types.ObjectId(data.id) }, { $set:  data })
        .then(data => {
            if (data.acknowledged === true){
                res.status(201).json('Data successfully updated.')
            }
            else{
                throw new Error("Cannot update data.")
            }
        })
        .catch(err => res.status(400).json(err))
    }
    catch(err){
        res.status(400).json("Error updating data.")
    }
})

module.exports = router