// Importing Mongoose
const mongoose = require("mongoose");

// Importing other packages
const randomstring = require("randomstring")
const random = require("random")


// Url schema
const UrlSchema = new mongoose.Schema({
    short: {
        type: String,
        unique: true,
        minlength: 5,
        maxlength: 15,
        match: /^([a-zA-Z0-9_]*)$/,
        default: () => {
            return randomstring.generate({
                length: random.int(5, 7),
                charset: "alphanumeric",
            })
        }
    },
    originalUrl: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
});


// Applying plugins
const uniqueValidator = require("mongoose-unique-validator");
UrlSchema.plugin(uniqueValidator);


// Exporting the schema
module.exports = UrlSchema
