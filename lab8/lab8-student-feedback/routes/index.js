// use express
const express = require('express')
const router = express.Router()

// index
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Feedback app', author: 'somi'})
})

// feedback form
router.get('/feedback-form', function(req, res, next){
    res.render('student_feedback_form')
})

// after submitting feedback
router.post('/submit-feedback', function(req, res, next){
    // get form data
    const formData = req.body

    let message = formData.comments

    messageSorter(message).then(departmentList => {
        if (departmentList.lenght === 0) {
            departmentList = ['General college feedback']
        }    

        console.log('Departments to contact', departmentList)

        // send response
        return res.render('thank_you', {
            name: formData.name,
            email: formData.email,
            message: formData.comments,
            currentStudent: formData['current-student'],
            departmentList: departmentList
        })

    })
})

module.exports = router