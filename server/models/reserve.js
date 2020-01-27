const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReserveSchema = new Schema({
    id_restaurant: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true}
});

module.exports = mongoose.model('Reserves', ReserveSchema);