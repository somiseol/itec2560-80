const express = require('express')
const router = express.Router()
const randomWyrQuestion = require('../model/wyr')

router.get('/wyr', function(req, res, next) {
    const wyrQuestion = randomWyrQuestion()
    res.json(wyr)
})

module.exports = router