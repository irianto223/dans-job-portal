const userRepository = require('../user/userRepository')
const httpResponse = require('../../utils/httpResponse')
const authHelper = require('./authHelper')

const createUser = async (payload) => {

  const user = {
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    username: payload.username,
    password: authHelper.hashPassword(payload.password),
  }

  const existingUser = await userRepository.findOneByEmailOrUsername(user.email, user.username)

  if (existingUser) {

    // validate existing username
    if (existingUser.email == user.email) {
      throw new Error('email already exists')
    }

    // validate existing email
    if (existingUser.username == user.username) {
      throw new Error('username already exists')
    }
  }

  return userRepository.create(user)
}

module.exports = {
  createUser,
}
