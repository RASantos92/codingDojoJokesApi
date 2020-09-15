const mongoose = require('mongoose');

//Basic setup of the Mongoose Schema
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "This is how we validate"],
        minlength: [3, "Setup has to be more than 2 characters"]
    },
    punchline: String
}, { timestamps: true })
//this is how we register our schema.
const Joke = mongoose.model("Joke", JokeSchema);

//Finally we export it out of the file.
module.exports = Joke;