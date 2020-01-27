const mongoose = require('mongoose');
const { Schema } = mongoose;

const MenuSchema = new Schema({
    id_restaurant: {type: String, required: true},
    product: {type: Array(String), required: true}
});

module.exports = mongoose.model('Menu', MenuSchema);