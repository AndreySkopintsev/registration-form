const express = require('express')
const app = express()
const cors = require('cors')
const registerRouter = require('./controllers/register')


app.use(cors())
app.use('/api',registerRouter)

module.exports = app