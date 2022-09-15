const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String,
    },
    age:{
        type: Number
    },    
})
module.exports = mongoose.model('Author', authorSchema);