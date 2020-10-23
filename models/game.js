const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

const gameSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String},
        genre: {type: String},
        rating: {type: Number},
        release_date: {type: Date}
    }
)
module.exports = mongoose.model('Game', gameSchema);