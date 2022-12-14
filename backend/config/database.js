const { connect } = require("mongoose");


const connectDatabase = async () => {
	try {
		console.log("Connecting to database... 🚀");
		await connect(process.env.DB_URI);
		console.log("Connected to database 😸🎉");
	} catch (err) {
		console.error(err.message);
        console.log("errror")
		process.exit(1);
	}
};

module.exports = connectDatabase
