const express = require('express')
const { Sequelize } = require('sequelize')
const sequelize = require('./v1/config/database/sequelize')
const userAPI = require('./v1/components/user/userAPI')
const { createDefaultUser } = require('./v1/utils/common')

// load env vars
require('dotenv').config()
const {
  PORT,
  IS_DROP_ALL_TABLE,
  NODE_ENV,
} = process.env

// init express
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// sequelize
sequelize.authenticate().then(() => {

  console.log('Connection has been established successfully.')

  const isDropAllTables = NODE_ENV != 'production' && IS_DROP_ALL_TABLE === 'true'
  sequelize.sync({ force: isDropAllTables }).then(() => {

    console.log('All models were synchronized successfully.')

    createDefaultUser().then(() => {
      console.log('Default user created successfully.')
    }).catch(err => {
      console.error('Fail generate default user:', err)
    })

  }).catch(error => {
    console.error('Fail to synchronize models:', error)
  })

}).catch(error => {
  console.error('Unable to connect to the database:', error)
})

// API endpoints
app.use('/v1/users', userAPI)

// listen to incoming request
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
