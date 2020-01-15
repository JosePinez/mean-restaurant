const mongoose = require('mongoose');
const { Schema } = mongoose;

const TableSchema = new Schema({
    number: {type: Number, required:true},
    capacity: {type: Number, required: true}
});

module.exports = mongoose.model('Tables', TableSchema);