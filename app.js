const express = require('express')
const APP = express();
const PORT = 3000

const mongoose = require('mongoose')
// dbname changed to game-data
const mongoDB = 'mongodb+srv://test1:test1@game-data.xi8ae.mongodb.net/game-date?retryWrites=true&w=majority'
mongoose.connect(mongoDB, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

APP.get('/', (req, res) => {
    res.send('Hello World!')
})

APP.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))