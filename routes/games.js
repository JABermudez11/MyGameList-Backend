const express = require('express');
const router = express.Router();

// index
router.get('/', () => {
    console.log('get request to games')
})

module.exports = router