module.exports = (server) => {
	
	// Enabling headers
	Headers(server)

	// Adding Morgan for logging
	Morgan(server)

	// Adding BodyParser
	BodyParser(server)
}

function Morgan(server) {

	// Importing Morgan for logging
	let plugin = require("morgan")

	// Adding it to the Express server
	server.use(plugin("dev"))
}

function BodyParser(server) {

	// Importing the BodyParser
	let plugin = require("body-parser")

	// Adding it to the Express server
	server.use(plugin.urlencoded({
		extended: false,
		useNewUrlParser: true,
	}))
	server.use(plugin.json())
}

function Headers(server) {

	// Let clients use our API (CORS-Handling)
	server.use((req, res, next) => {	
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Origin, Accept, Authorization");
		res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
		next();	
	}); 
}
