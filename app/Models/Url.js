// Importing Mongoose
const mongoose = require("mongoose");

// Importing the Rul schema
const UrlSchema = require("../../database/schemas/url.js")



/**
|--------------------------------------------------
| Model generating
|--------------------------------------------------
*/

// Generating a model of the schema
const UrlModel = mongoose.model("urls_test001", UrlSchema);



/**
|--------------------------------------------------
| Mutators
|--------------------------------------------------
*/

// `Find` output mutator config
const outputManipulate = {
	$project: {
		_id: 0,
		id: "$_id",
		short: 1,
		originalUrl: 1,
		created: 1,
		shortUrl: {
			$concat: ["https://urlshortener.goabela.com/", "$short"]
		}
	}
}

// _Find method
UrlModel._find = () => {	
	return new Promise((resolve, reject) => {
		UrlModel.aggregate([
			outputManipulate,
		])
		.then(result => {
			resolve(result)
		})
		.catch(error => {
			reject(error)
		})
	})	
}



// Exporting the model
module.exports = UrlModel
