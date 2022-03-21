const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "Product title is required"],
        minlength: [3, "Product title must be at least 3 characters long"]
    },
    price : {
        type: Number,
        required: [true, "Product price is required"],
        min: [0, "Product price must be a positive number"]
    },
    description : {
        type: String,
        required: [true, "Product description is required"],
        minlength: [3, "Product description must be at least 3 characters long"]
    }
}, {timestamps : true})

// Create Product variable that is exported, 
// this will allow us to import and enable CRUD functionality
module.exports.Product = mongoose.model('Product', ProductSchema)