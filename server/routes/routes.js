const express = require('express')

const router = express.Router()


//setting up a home route
router.get('/', (req, res) => {
    res.send('Example example')
})

//exporting routes to be used in server.js
module.exports = router
