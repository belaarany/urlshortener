// Importing Express and creating a Express Router
const express = require("express")
const router = express.Router()

// Importing the controllers
const UrlController = require("../app/Controllers/url.js")

// Route for creating a new Url (`insert`)
router.post("/insert", (req, res) => {
    UrlController.insert({ req })
    .then(response => {
        res.json({
            "ok": 1,
            response,
        })
    })
    .catch(error => {
        console.error("Something went wrong: ", error)
        res.json({
            "msg": "Something went wrong... check the console",
            error,
        })
    })    
})

// Exporting the router
module.exports = router
