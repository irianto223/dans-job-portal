const express = require('express')
const userController = require('./userController')

const router = express.Router()

router.get('/', userController.getListUsers)

module.exports = router
