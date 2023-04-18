const authService = require('../../components/auth/authService')

require('dotenv').config()

const {
  DEFAULT_ADMIN_FIRST_NAME,
  DEFAULT_ADMIN_LAST_NAME,
  DEFAULT_ADMIN_EMAIL,
  DEFAULT_ADMIN_USERNAME,
  DEFAULT_ADMIN_PASSWORD,
} = process.env

const createDefaultUser = () => {
  return authService.createUser({
    firstName: DEFAULT_ADMIN_FIRST_NAME,
    lastName: DEFAULT_ADMIN_LAST_NAME,
    email: DEFAULT_ADMIN_EMAIL,
    username: DEFAULT_ADMIN_USERNAME,
    password: DEFAULT_ADMIN_PASSWORD,
  })
}

module.exports = {
  createDefaultUser,
}
