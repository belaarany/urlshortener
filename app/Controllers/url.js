// Url controller

// Importing the Url model
const Url = require("../Models/Url.js")

// Exporting the methods
module.exports = {

    // Insert method
    insert({ req: request }) {
        return new Promise((resolve, reject) => {

            // Checking if the `short` has been passed
            if (request.body.short
                && request.body.short !== undefined
                && request.body.short !== null) {

                // If so then inserting the Url
                InsertUrl({
                    resolve,
                    reject,
                    params: {
                        short: request.body.short,
                        originalUrl: request.body.originalUrl,
                    }
                })
            }

            // Else inserting a new Url with the default `short`
            else {
                InsertUrl({
                    resolve,
                    reject,
                    params: {
                        originalUrl: request.body.originalUrl,
                    }
                })
            }
        })
    }

}

// Method for creating the new Url
function InsertUrl({ resolve, reject, params }) {
    Url.create(params)
    .then(response => {
        console.log(response)
        resolve({
            "created": true,
        })
    })
    .catch(error => {
        reject({
            "msg": "Creation error",
            error,
        })
    })
}
