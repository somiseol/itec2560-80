// using express library
const express = require('express')
const path = require('path')

// import from index.js
const indexRouter = require('./routes/index')

// create web app
const app = express()

app.use(express.static('public'))

// set view
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs') // handlebars

app.use('/', indexRouter)

// start server
let server = app.listen(process.env.PORT || 3000, function () {
    console.log('Express server running on port', server.address().port)
})