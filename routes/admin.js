const express = require ('express')
const router = express.Router();


router.get('/login', (req, res) =>{
    res.send('Hii form admin login')
})


module.exports = router