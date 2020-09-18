const mongoose = require('mongoose');

//Basic setup of the Mongoose Schema
const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "you have to give this pet a name"],
        minlength: [2, "name has to be more than 2 characters"]
    },
    petType:{
        type: String,
        required: [true,"you have to tell us what type of pet"],
        minlength: [3,"type need to ba at least 3 characters"]
    },
    petDesc: {
        type:String,
        required:[true,"need a description to better help your pet"],
        minlength: [3,"description needs to be at least 3 characters"]
    },
    skillOne: {
        type:String,
        required:[false],
    },
    skillTwo: {
        type:String,
        required:[false],
    }, 
    skillThree: {
        type:String,
        required:[false],
    },
    like: {
        type:Number,
        required:[false]
    }

}, { timestamps: true })
//this is how we register our schema.
const Pet = mongoose.model("Pet", PetSchema);

//Finally we export it out of the file.
module.exports = Pet;