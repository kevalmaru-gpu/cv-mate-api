const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://keval:gqhyzkHwabFka7lf@cluster0.hpxhiky.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
})
const conn = mongoose.connection

conn.on('connected', function () {
  console.log('Database connected')
})
conn.on('disconnected', function () {
  console.log('MongoDB disconnected')
})
conn.on('error', console.error.bind(console))
module.exports = conn