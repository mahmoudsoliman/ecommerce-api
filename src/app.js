const express = require('express')
const { boomifyErrorsMiddleware, errorHandlerMiddleware } = require('./middlewares')
const bodyParser = require('body-parser')
const router = require('./routes')

const app = express()

app.set('port', 8080)

app.use(bodyParser.json())
app.use(router)

app.use(boomifyErrorsMiddleware)
app.use(errorHandlerMiddleware)

module.exports = { app }