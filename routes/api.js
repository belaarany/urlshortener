// Importing Express and creating a Express Router
const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello world from the service provider!')
})

module.exports = router
