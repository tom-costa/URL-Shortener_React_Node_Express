// Initialising variables with all the 'requires'
const express = require('express')
const shortID = require('shortid')
const createHTTPerror = require('http-errors')
const mongoose = require('mongoose')
const path = require('path')

// Setting up Express 
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

// First route (root):
app.get('/', async (req, res, next) => {
    res.render('index' )
})

app.post('/', async (req, res, next) => {
     
})

app.listen(3000, ()=> console.log("Server running on port 3000"))

