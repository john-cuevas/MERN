const {Product} = require("./../models/product.model")

// get all
module.exports.allProducts = (req,res) =>{
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err))

}
// get one
module.exports.oneProduct = (req,res) =>{
    Product.findOne({_id: req.params.id})
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err))
}
// create
module.exports.createProduct = (req,res) =>{
    Product.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))

}
// update
module.exports.updateProduct = (req,res) =>{
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators: true}
    )
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}
// delete
module.exports.deleteProduct = (req,res) =>{
    Product.deleteOne({_id: req.params.id})
        .then(res => res.json(res))
        .catch(err => res.json(err))
}