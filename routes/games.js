const express = require('express');
const router = express.Router();
const Game = require('../models/game')

// index
router.get('/', async(req, res) => {    
   
    try {
        const games = await Game.find()
        res.json(games)
    } catch (err) {
        res.send('Error: ' + err)
    }   
})

router.get('/:id', async(req, res) => {        

    try{
        const game = await Game.findById(req.params.id)
        res.json(game)
    } catch(err) {
        res.send('Error: '+ err)
    }
})

router.post('/', async (req, res) => {
    const game = new Game({        
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre,
        release_date: req.body.release_date
    })
    
    console.log("post request sent to games")
    console.log(game)
    console.log(game.title)
    
    try{
        const recentGame = await game.save()
        if (recentGame){
            res.json(recentGame)
            console.log("game saved")
        } else {
            console.log("game not saved")
        }
        
    }catch(err){
        res.send('Error '+ err)
    }

})

router.patch('/:id', async (req, res) => {
    
})

module.exports = router