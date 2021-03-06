//bringing in express and path
const express = require('express')
const { join } = require('path')

const app = express ()

//middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.listen(process.env.PORT || 3000)