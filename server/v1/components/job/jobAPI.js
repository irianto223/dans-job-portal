const express = require('express')
const jobController = require('./jobController')
const { authenticate } = require('../../middlewares/auth')

const router = express.Router()

router.get('/', authenticate, jobController.getJobs)
router.get('/:id', authenticate, jobController.getJobById)

module.exports = router
