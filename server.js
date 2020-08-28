const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
require('dotenv').config()

app.use(bodyParser.json()); 

// mongo connector
mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection
db.on('open', () => {
    console.log("db connected...")
})

// to allow express to use json
app.use(express.json())

const gameRouter = require('./routes/games')
app.use('/games', gameRouter)

app.get('/', (req, res) => {
    res.send("Hello from home")
})

app.get('/games', (req, res) => {
    res.send("Hello smort")
})

app.listen(4000, () => {
    console.log('Server Started')
})