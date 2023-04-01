const mongoose = require('mongoose')
const express = require('express')
const adminModel = require('../models/admin')

const router = express.Router()

router.post('/login', async (req, res) => {
    const data = req.body

    await adminModel.findOne( data )
    .then(response => {
        if (response != null)
            res.status(200).json("Valid admin credntial")
        else
            throw new Error("Invalid crendential")
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.post('/register', async (req, res) => {
    const data = req.body

    const adminData = new adminModel(data)
    adminData.save()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

module.exports = router