const express = require('express')
const jobController = require('./jobController')

const router = express.Router()

router.get('/', jobController.getJobs)

module.exports = router
