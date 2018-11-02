const mongoose = require("mongoose");

const UrlSchema = require("../../database/schemas/url.js")

const UrlModel = mongoose.model("urls", UrlSchema);
