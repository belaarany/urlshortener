// Importing Mongoose
const mongoose = require("mongoose")


// Making the connection to the Mongoose Database
let {
    MONGODB_HOST: host = null,
    MONGODB_PORT: port = null,
    MONGODB_DATABASE: database = null,
} = process.env

mongoose.connect(`mongodb://${host}:${port}/${database}`)
// TODO: catching errors
