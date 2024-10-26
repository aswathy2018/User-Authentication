const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')


router.get('/login', (req, res) => {
    res.render('user/login');
});


router.get('/register', (req, res) => {
    res.render('user/register')
})

router.post('/register', userController.registerUser)

module.exports = router;
