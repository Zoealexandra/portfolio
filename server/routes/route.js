const express = require('express')

const router = express.Router()

const dbProjects = require('../projects')


//setting up a home route
router.get('/', (req, res) => {
    res.send('Portfolio Website')
})

//getting all the projects
router.get('/', (req, res) => {

})

//exporting routes to be used in server.js
module.exports = router
