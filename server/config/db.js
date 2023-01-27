const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://bashclay:KgXKcgdVO6zvgMRn@cryptomx.udgsjfx.mongodb.net/crypto-app?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB database connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;