const mongoose = require('mongoose');
const { Schema } = mongoose;

const RestaurantSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    capacity: {type: Number, required: true},
    timeTable: {type: String, required: true}
});

module.exports = moongose.model('Restaurants', RestaurantSchema);