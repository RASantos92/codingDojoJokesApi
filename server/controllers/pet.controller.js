const Pet = require('../models/pet.model');

module.exports = {
    index : (req,res) => {
        Pet.find().sort({petType:1})
            .then(pet =>{
                res.json({results:pet})
            })
            .catch(err => {
                console.log(err);
            })
    },
    create : (req,res) => {
        Pet.create(req.body)
            .then(pet => {
                res.json({results:pet})
            })
            .catch(err => res.json(err.errors))
    },
    show : (req,res) => {
        Pet.findOne({_id:req.params.id})
            .then(pet => {
                res.json({results:pet})
            })
            .catch(err => res.json(err.errors))
    },
    update : (req,res) => {
        // Pet.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        //     .then(  pet => {
        //         pet.findOne({_id:req.params.id})
        //         .then(pet =>{
        //             res.json({results:pet})
        //         })
        //     })
        // .catch(err => res.status(400).json(err))
        Pet.findOne({_id: req.params.id}, function(err,pet){
            pet.petName = req.body.petName;
            pet.petType = req.body.petType;
            pet.petDesc = req.body.petDesc;
            pet.skillOne = req.body.skillOne;
            pet.skillTwo = req.body.skillTwo;
            pet.skillThree = req.body.skillThree;
            pet.save(function(err,savedPet) {
                if(savedPet == null)
                    res.status(400).json(err);
                else 
                    res.json({pet:savedPet});
            })
        })
    },
    destroy : (req,res) => {
        Pet.deleteOne({_id:req.params.id})
            .then(result => res.json({results: result}))
            .catch(err => res.json(err.errors))
    }
}