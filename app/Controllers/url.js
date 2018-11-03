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
                && request.body.short !== null
                && request.body.short.length > 3) {

                // Checking if the `short` already exists or not
                Url.countDocuments({ short: request.body.short})
                .then(count => {
                    
                    // If the count is more than 0 then it already exists
                    if (count > 0) {
                        reject({
                            "msg": "Already exists",
                        })
                    }

                    // Else, creating the Url
                    else {
                        Url.create({
                            short: request.body.short,
                            originalUrl: request.body.originalUrl,
                        })
                        .then(response => {
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

                })
                .catch(error => {
                    reject({
                        "msg": "Internal error",
                        error,
                    })
                })
            }
            else {
                reject({
                    "msg": "Short has not set",
                })
            }
        })
    }

}
