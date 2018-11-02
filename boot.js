// Importing dotENV
require("dotenv").config()

// Importing the server
const server = require("./server.js")


// Passing the server to the Server Service Provider
require("./app/Providers/ServerServiceProvider.js")(server)

// Passing the server to the Route Service Provider
require("./app/Providers/RouteServiceProvider.js")(server)
