const express = require('express')

const indexRouter = require('./routes/index')

const app = express()

app.use('/', indexRouter)

let server = app.listen(process.env.PORT || 3000, function () {
    console.log('Express erver running on port', server.address().port)
})