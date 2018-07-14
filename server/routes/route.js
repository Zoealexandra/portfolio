const express = require('express')

const router = express.Router()

const dbProjects = require('../db/projects')

router.use(express.json())


//setting up a home route
router.get('/', (req, res) => {
    res.send('Portfolio Website')
})

//getting all the projects
router.get('/projects', (req, res) => {
     dbProjects.getAllProjects()
        .then(projects => res.json(projects))
        .catch(err => {
            res.status(500).json({errorMessage: err.message})
        })
})

//exporting routes to be used in server.js
module.exports = router

