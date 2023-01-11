const moongoose = require("mongoose");

const productSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    }
})

const Product = moongoose.model('product', productSchema);

module.exports = Product;