let mongoose = require('mongoose');
// create a book model
let bagModel = mongoose.Schema({
    product: String,
    size: String,
    color: String,
    price: String,
    quantity: String,
    subtotal: String
    },
    {
        collections: "bags"
    }
);
module.exports = mongoose.model('Bag', bagModel);