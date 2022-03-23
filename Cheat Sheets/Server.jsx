// 1. Create folder (server)
// 2. npm init -y
// 3. npm install express mongoose cors
// 4. create folders configs, models, controllers, routes
// 5. mongoose.config.js, model.js, controller.js, routes.js
// 6. server.js

//****************SERVER.js******************/

// import dependencies

const express = require('express')

// allow front-end back-end interaction
const cors = require('cors')

const app = express()

// config mongoose
require("./configs/mongoose.config")

// express config for post
app.use(cors())
app.use(express.json(), express.urlencoded({ extended:true }))

// routes
require("./routes/authors.routes")(app)

// listen to the port
app.listen(8000, () => console.log("The server is all fired up on port 8000"))

//****************MONGOOSE.CONFIG.js******************/
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authors_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

//****************MODEL.js******************/

const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Author name is required"],
        minlength: [3, "Author name must be at least 3 characters long"]
    }

}, {timestamps : true})

// Create Product variable that is exported, 
// this will allow us to import and enable CRUD functionality
module.exports.Author = mongoose.model('Author', AuthorSchema)

//****************CONTROLLER.js******************/

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

//****************ROUTES.js******************/
const AuthorController = require('./../controllers/author.controller')

module.exports = app => {
    app.get("/api/authors", AuthorController.allAuthors)
    app.get("/api/authors/:id", AuthorController.oneAuthor)
    app.post("/api/authors", AuthorController.createAuthor)
    app.put("/api/authors/:id", AuthorController.updateAuthor)
    app.delete("/api/authors/:id", AuthorController.deleteAuthor)
}
