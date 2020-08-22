const express = require('express');
const router = express.Router();
const Game = require('../models/game')
// index
router.get('/', async(req, res) => {
    try{
        const games = await Game.find()
        res.json(games)
    }catch(err){
        res.send('error ' + err)
    }
})

router.post('/', async(req, res) => {
    const game = new Game({
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre,
        release_date: req.body.release_date
    })

    try{
        const g1 = await game.save()
        res.json(g1)
    }catch(err){
        res.send('Error '+ err)
    }
})

module.exports = router