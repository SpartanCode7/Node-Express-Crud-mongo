const mongoose = require('mongoose')

const Schema = mongoose.Schema
const categoriesSchma = new Schema({
    cateName: {
        type: String
    },
    cateDiscription: {
        type: String
    },
    cateSlug: { 
        type: String
    },
    catPermalink: {
        type: String
    }
}) 

module.exports = mongoose.model('categories', categoriesSchma)