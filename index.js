const express = require("express")
const connect = require('./connect.js')
const studentRouter = require('./router/studentRouter.js')
const achievementRouter = require('./router/achievementRouter.js')
const adminRouter = require('./router/adminRouter.js')
const facultyRouter = require('./router/facultyRouter.js')

const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/student', studentRouter)
app.use('/achievement', achievementRouter)
app.use('/admin', adminRouter)
app.use('/faculty', facultyRouter)

app.listen(5000)