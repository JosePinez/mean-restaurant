const mongoose = require('mongoose');
const { Schema } = mongoose;

const MenuSchema = new Schema({
    product: {type: Array(String), required: true}
});

module.exports = mongoose.model('Menu', MenuSchema);