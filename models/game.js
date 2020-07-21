const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema(
    {
        title: {type: String, required: true},
        description: {type: String},
        genre: {type: String},
        release_date: {type: Date}
    }
)