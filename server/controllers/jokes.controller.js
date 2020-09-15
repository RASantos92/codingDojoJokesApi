const Joke = require('../models/jokes.model');

module.exports = {
    index : (req,res) => {
        Joke.find()
            .then(joke =>{
                res.json({results:joke})
            })
            .catch(err => {
                console.log(err);
            })
    },
    create : (req,res) => {
        Joke.create(req.body)
            .then(joke => {
                res.json({results:joke})
            })
            .catch(err => res.json(err.errors))
    },
    show : (req,res) => {
        Joke.findOne({_id:req.params.id})
            .then(joke => {
                res.json({results:joke})
            })
            .catch(err => res.json(err.errors))
    },
    update : (req,res) => {
        Joke.findOneAndUpdate({_id:req.params.id},req.body,{useFindAndModif:true, runValidators:true})
            .then(  joke => {
                Joke.findOne({_id:req.params.id})
                .then(joke =>{
                    res.json({results:joke})
                })
            })
        .catch(err => res.json(err.errors))
    },
    destroy : (req,res) => {
        Joke.deleteOne({_id:req.params.id})
            .then(result => res.json({results: result}))
            .catch(err => res.json(err.errors))
    }
}