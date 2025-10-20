const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    res.render('index')
})


router.post('/submit-data', function(req, res, next){
    // get form data
    const formData = req.body

    //TODO: save data to database

    res.render('result_page', {
        bmi_final: 'TODO'
    })
})


module.exports = router