const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Base64 } = require('js-base64')

const hashPassword = (plainPassword) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(plainPassword, salt)

  return hash
}

const signJwt = (payload, secret) => {
  const token = jwt.sign(payload, secret)
  return token
}

const extractBasicToken = (headers) => {
  const basicToken = headers?.authorization?.split?.(' ')?.[1]
  return basicToken
}

const extractUsername = (basicToken) => {
  const decoded = Base64.decode(basicToken)
  return decoded?.split?.(':')?.[0]
}

const extractPassword = (basicToken) => {
  const decoded = Base64.decode(basicToken)
  return decoded?.split?.(':')?.[1]
}

module.exports = {
  hashPassword,
  signJwt,
  extractBasicToken,
  extractUsername,
  extractPassword,
}
