const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../config/database/sequelize')

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING,
    // allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    // allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    // allowNull: false
  },
}, {
  // Other model options go here
  tableName: 'users',
  timestamps: true,
})

module.exports = User
