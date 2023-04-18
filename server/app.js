const express = require('express')
const { Sequelize } = require('sequelize')

// load env vars
require('dotenv').config()
const {
  PORT,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env

// init express
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// sequelize
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`)
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(error => {
  console.error('Unable to connect to the database:', error);
})

// API endpoints
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// listen to incoming request
app.listen(port, () => {
  console.log(`Example app listening on port ${PORT}`)
})
