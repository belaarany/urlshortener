// Importing dotENV
require("dotenv").config()


// Importing the server
const server = require("./server.js")


// Passing the server to the Server Service Provider
require("./Providers/ServerServiceProvider.js")(server)

// Passing the server to the Database Service Provider
require("./Providers/DatabaseServiceProvider.js")

// Passing the server to the Route Service Provider
require("./Providers/RouteServiceProvider.js")(server)
