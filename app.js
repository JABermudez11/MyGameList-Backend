const express = require('express');

// express app
const app = express();


const server  = require('./server.js');
app.use('/home', server);

const games = require('./gamesServer.js')
app.use('./games', games);

// mongoose
const mongoose = require('mongoose');

// connecting to game models
const gameSchema = require('./models/gameSchema');

// connecting to user models
const userSchema = require('./models/userSchema');

// connects to mongodb 
const dbURI = 'mongodb+srv://KevinTran:Testing123@game-data.xi8ae.mongodb.net/game-dataretryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true}, function(err, db){});

// default connection
const db = mongoose.connection;

// bind connection to error even
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const handleError = function() {
    console.error(err);
}

const newGame = new gameSchema({title: 'Legend of Zelda', description: 'blah blah'});

newGame.save(function (err) {
    if(err) return handleError(err);
    console.log('hopefully it worked');
});

const newUser = new userSchema({userName: 'betaTester1', password: 'cheating'});

newUser.save(function(err) {
    if(err) return handleError(err);
    console.log('hopefully it worked');
})