const express = require('express');
const router = express.Router();
const Game = require('../models/game')

// index
router.get('/', async(req, res) => {
    console.log("games get request hit!")
    res.send("get request succesful")
    console.log(req.headers);

    const game = await Game.find()

    if (game) {
        console.log(game)
    } else {
        res.redirect('/')
    }
    
    // try{
    //     const games = await Game.find()
    //     res.json(games)
    // }catch(err){
    //     res.send('error ' + err)
    // }
})

router.post('/', async (req, res) => {
    const game = new Game({
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre,
        release_date: req.body.release_date
    })
    // game = req.body
    console.log("post request sent to games")
    console.log(game)
    console.log(game.title)
    
    try{
        const g1 = await game.save()
        res.json(g1)
    }catch(err){
        res.send('Error '+ err)
    }
    
})

module.exports = router