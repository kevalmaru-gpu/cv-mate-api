const express = require("express")
const connect = require('./connect.js')
const studentRouter = require('./router/studentRouter.js')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/student', studentRouter)

app.listen(5000)