require('dotenv').config();
const mongoose = require("mongoose");

function connectDB() {
    //Database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL);
    const connection = mongoose.connection;

    try {
        connection.once('open',() => {
            console.log("Database Connected.")
        });
    } catch (error) {
        console.log("Connection Failed.")
    }
}

module.exports = connectDB;