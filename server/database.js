const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean-restaurant';

mongoose.connect(URI)
    .then(db => console.log('DB is connect'))
    .catch(err => console.log(err));

module.exports = mongoose;