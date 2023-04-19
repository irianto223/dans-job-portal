const bcrypt = require('bcryptjs')
const userRepository = require('../user/userRepository')
const httpResponse = require('../../utils/httpResponse')
const authHelper = require('./authHelper')
const { throwUnprocessableEntity, throwNotFound, throwForbidden } = require('../../utils/error')

const createUser = async (payload) => {

  const user = {
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    username: payload.username,
    password: authHelper.hashPassword(payload.password),
    role: payload.role,
  }

  const existingUser = await userRepository.findOneByEmailOrUsername(user.email, user.username)

  if (existingUser) {

    // validate existing username
    if (existingUser.email == user.email) {
      return throwUnprocessableEntity('email already exists')
    }

    // validate existing email
    if (existingUser.username == user.username) {
      return throwUnprocessableEntity('username already exists')
    }
  }

  return userRepository.create(user)
}

const auth = async (username, password) => {

  // existing user
  const existingUser = await userRepository.findOneByUsername(username)
  if (!existingUser) {
    return throwNotFound('username not found')
  }

  // password verification
  const isPasswordMatch = bcrypt.compareSync(password, existingUser.password)
  if (!isPasswordMatch) {
    return throwForbidden('password not match')
  }

  // generate jwt token
  const jwtPayload = {
    sub: existingUser.id,
    iat: Number(new Date()),
  }
  const token = authHelper.signJwt(jwtPayload, process.env.JWT_SECRET)

  // setup response payload
  const rawUser = { ...existingUser }
  delete rawUser.password
  const responsePayload = {
    token,
    user: rawUser,
  }

  return {
    data: responsePayload,
    meta: {},
  }
}

module.exports = {
  createUser,
  auth,
}
