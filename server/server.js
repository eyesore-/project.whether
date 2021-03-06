const express = require('express')
const morgan = require('morgan')
const path = require('path')

let app = express()

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '/../client')))

app.listen(8000)

console.log('LISTENING - 8K')

module.exports = app
