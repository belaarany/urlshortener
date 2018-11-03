// Importing Express
const express = require("express")


// Creating an Express Server instance
const server = express()
const port = process.env.SERVER_PORT || 8080


// Starting the Express server
server.listen(port, () => {
    console.log(`${process.env.APP_NAME} started on port ${port}!`)
})


// Exporting the server for further usage
module.exports = server
