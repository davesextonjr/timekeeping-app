const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log("Time: ", Date.now())
    next()
})

router.get('/', (req, res) => {
    res.send('Times home page')
})

router.get('/:day', (req, res) => {
    console.log(req.params)
    res.send('Times of a specific day')
})
