const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.DATABASE_STRING);
// setting up database
const database = mongoose.connection
database.on('error', (err) => {
    console.log(err);
})

database.on('connected', () => {
    console.log("CONNECTED")
})

module.exports = {
    mongoose,
    database
}