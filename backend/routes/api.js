// Importing Express and creating a Express Router
const express = require("express")
const router = express.Router()

// Importing the controllers
const UrlController = require("../app/Controllers/url.js")

// Route for creating a new Url
router.post("/url", (req, res) => {
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

// Route for translating a short
router.get("/url/translate", (req, res) => {
    UrlController.translate({ params: req.query })
    .then(response => {
        res.json({
            "ok": 1,
            response
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

router.get("/short/generate", (req, res) => {
    let short = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 6; i++) {
        short += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    res.json({
        short,
    })
})

router.get("/useragent", (req, res) => {
    const useragent = require("useragent")
    var agent = useragent.parse(req.headers['user-agent']);
    console.log("\n\n\n")
    console.log(agent.os.toJSON())
    console.log(agent.toJSON())
    console.log(req.connection.remoteAddress, req.ip)
    res.send()
})

// Exporting the router
module.exports = router
