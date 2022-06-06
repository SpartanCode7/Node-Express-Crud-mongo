const mongoose = require('mongoose')

const Schema = mongoose.Schema
const productSchma = new Schema({
    name: {
        type: String
    },
    discription: {
        type: String
    },
    permalink: { 
        type: String
    },
    location: {
        type: String
    },
    price: {
        type: String
    },
    discount: {
        type: String
    },
    taxstatus: {
        type: String
    },
    taxclass: {
        type: String
    },
    currency: {
        type: String
    }
}) 

module.exports = mongoose.model('products', productSchma)