const express = require('express');
const router = express.Router();
const Game = require('../models/game')

// index
router.get('/', async(req, res) => {    
    // res.send("get request succesful")    

    // const game = await Game.find()

    try {
        const games = await Game.find()
        res.json(games)
    } catch (err) {
        res.send('Error: ' + err)
    }
    
    // try{
    //     // const games = await Game.find()
    //     const {title, description, genre } = req.query
    //     // if (games) {
    //     //     console.log("games found")
    //     // }
    //     // res.json(games)
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

module.exports = router