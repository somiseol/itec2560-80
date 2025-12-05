const express = require('express')
const path = require('path')

// import the routes in routes/index.js
const indexRouter = require('./routes/index')

// Create the web application
const app = express() 

// make the routes in index.js available to the app 
const staticFilePath = path.join(__dirname, 'client', 'dist')
const staticFiles = express.static(staticFilePath)
app.use('/', staticFiles)

app.use('/', indexRouter)

// Start server running 
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})