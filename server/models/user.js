const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required:true},
    role: {type: String, required: true},
    image: {type: String}
});

module.exports = mongoose.model('User', UserSchema);