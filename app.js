#!/usr/bin/env nodejs


// Checking if the ENV file exists
const fs = require("fs");
if (fs.existsSync("./.env") === false) {

    console.error("The ENV file does not exist! Shutting down...")

    process.exit()

    // TODO: validating the env file --> testingben
}


// Importing the booting file
require("./boot.js")
