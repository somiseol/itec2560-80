// using express library
const express = require('express')

const router = express.Router()

router.get('/', function(req, res, next) {

    res.render('index')
})

router.get('/calculate', function(req, res, next){
    // get form data
    const formData = req.query

    // do the math
    let weight = parseFloat(formData.weight); // in case js thinks weight & height are strings
    let height = parseFloat(formData.height);
    const bmi = parseFloat((weight / (height * height)).toFixed(2)); // 2 decimal places

    if (isNaN(bmi)) {
        res.render('result_error')
    } else {
        res.render('result_page', {
            bmi_final: bmi
        })
    }
})

module.exports = router