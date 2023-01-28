const mongoose = require("mongoose");

const uri = "mongodb+srv://bashclayito:l14Vm6dRnIxTZcpI@cryptomxapplication.ukmw8ew.mongodb.net/?retryWrites=true&w=majority"

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