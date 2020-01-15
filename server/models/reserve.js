const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReserveSchema = new Schema({
    date: {type: String, required: true},
    time: {type: String, required: true}
});

module.exports = moongose.model('Reserves', ReserveSchema);