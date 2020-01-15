const mongoose = require('mongoose');
const { Schema } = mongoose;

const TableSchema = new Schema({
    capacity: {type: Number, required: true}
});

module.exports = moongose.model('Tables', TableSchema);