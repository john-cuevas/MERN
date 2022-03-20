const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setUp : {
        type: String,
        required: [true, "Joke setup is required"],
        minlength: [10, "Joke setup must be at least 10 characters long"]
    },
    punchLine : {
        type: String,
        required: [true, "Joke punchline is required"],
        minlength: [3, "Joke punch line must be at least 3 characters long"]
    }
}, {timestamps : true})


// Create Joke variable that is exported, 
// this will allow us to import and enable CRUD functionality
module.exports.Joke = mongoose.model('Joke', JokeSchema)