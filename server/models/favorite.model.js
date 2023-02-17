const mongoose = require('mongoose');
const User = require('./user.model');

const favoriteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    movieId: {
        type: Number,
        required: true,
    },
});


module.exports = mongoose.model('Favorite', favoriteSchema);
