const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    name: String,
    location: String,
    type: String,
    contact: String,
    email: String
});

module.exports = mongoose.model('School', schoolSchema);
