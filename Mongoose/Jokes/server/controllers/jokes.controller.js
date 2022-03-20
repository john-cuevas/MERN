const {Joke} = require('./../models/jokes.model')

// Get all jokes
module.exports.findAllJokes = (req, res) =>{
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}

// Get one joke
module.exports.findOneJoke = (req, res) =>{
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json({ joke: oneJoke}))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}

// Create joke
module.exports.createJoke = (req, res) =>{
    Joke.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}

// Update joke
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators: true}
    )
        .then(updateJoke => res.json({ joke: updateJoke}))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}

// Delete joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(res => res.json(res))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}
