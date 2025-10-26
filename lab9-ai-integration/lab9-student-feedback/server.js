// using express
const express = require('express')
const path = require('path')

// for parsing
const bodyParser = require('body-parser')

// import from index.js
const indexRouter = require('../../lab8/lab8-student-feedback/routes/index')

// create web app
const app = express()

// parse req form body
app.use(bodyParser.urlencoded({ extended: false }))

// use static
const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use('/', indexRouter)

// start server
let server = app.listen(process.env.PORT || 3000, function () {
    console.log('Express server running on port', server.address().port)
})