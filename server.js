const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;


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