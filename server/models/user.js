const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {type: String, required: true},
    dni: {type: String, required: true},
    email: {type: String, required: true},
    tel: {type: String, required: true}
});

module.exports = moongose.model('Users', UserSchema);