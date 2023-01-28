const mongoose = require("mongoose");

const uri = "mongodb+srv://dijarsmakolli:ptK9kGWTWzTZlVZS@cryptomxapp.nc5akly.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB database connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(`ErrorDB: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;