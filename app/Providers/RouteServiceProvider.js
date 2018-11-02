module.exports = (server) => {
    
    // Adding the API routes
    Routes_API(server)
}

function Routes_API(server) {

    // Importing the routes
    let routes = require("../../routes/api.js")

    // Adding them to the Express server
    server.use("/api/v2/", routes)
}
