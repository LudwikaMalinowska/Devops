const { Schema, model } = require('mongoose');

const authorSchema = new Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    writtenBooks: Array
});

module.exports = model('Author', authorSchema);