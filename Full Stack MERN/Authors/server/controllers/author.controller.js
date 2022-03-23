const {Author} = require("./../models/Author.model")

// get all
module.exports.allAuthors = (req,res) =>{
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err))

}
// get one
module.exports.oneAuthor = (req,res) =>{
    Author.findOne({_id: req.params.id})
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}
// create
module.exports.createAuthor = (req,res) =>{
    Author.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))

}
// update
module.exports.updateAuthor = (req,res) =>{
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators: true}
    )
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}
// delete
module.exports.deleteAuthor = (req,res) =>{
    Author.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}