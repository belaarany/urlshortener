// Importing Express and creating a Express Router
const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    let controller = require("../app/Controllers/mongodbtest.js")(req, res)
    res.send({"ok": 1})
})

module.exports = router
