// Importing Mongoose
const mongoose = require("mongoose");


// Url schema
const UrlSchema = new mongoose.Schema({
    short: String,
    originalUrl: String,
    created: { type: Date, default: Date.now },
});


// Exporting the schema
module.exports = UrlSchema
