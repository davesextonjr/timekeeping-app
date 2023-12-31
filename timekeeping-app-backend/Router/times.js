const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log("Time: ", Date.now())
    next()
})

router.get('/', (req, res) => {
    res.send({'times': 'display times here'})
})

router.get('/:day', (req, res) => {
    const {day} = req.params
    res.send(`You want to see times for ${day}`)
})

module.exports = router
