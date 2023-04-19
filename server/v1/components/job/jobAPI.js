const express = require('express')
const jobController = require('./jobController')

const router = express.Router()

router.get('/', jobController.getJobs)
router.get('/:id', jobController.getJobById)

module.exports = router
