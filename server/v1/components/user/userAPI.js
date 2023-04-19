const express = require('express')
const userController = require('./userController')
const { authenticate, authorizeRole } = require('../../middlewares/auth')

const router = express.Router()

router.get('/', authenticate, authorizeRole(['ADMIN']), userController.getListUsers)

module.exports = router
