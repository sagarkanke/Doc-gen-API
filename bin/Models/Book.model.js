"use strict";
var mongoose = require('mongoose');
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    summary: {
        type: String
    }
});
module.exports = mongoose.model('Book', bookSchema);
