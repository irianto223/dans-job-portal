const authService = require('../../components/auth/authService')

const createDefaultUser = () => {

  const addUsers = [
    authService.createUser({
      firstName: process.env.DEFAULT_ADMIN_FIRST_NAME,
      lastName: process.env.DEFAULT_ADMIN_LAST_NAME,
      email: process.env.DEFAULT_ADMIN_EMAIL,
      username: process.env.DEFAULT_ADMIN_USERNAME,
      password: process.env.DEFAULT_ADMIN_PASSWORD,
      role: 'SUPERADMIN',
    }),
    authService.createUser({
      firstName: process.env.DEFAULT_USER_FIRST_NAME,
      lastName: process.env.DEFAULT_USER_LAST_NAME,
      email: process.env.DEFAULT_USER_EMAIL,
      username: process.env.DEFAULT_USER_USERNAME,
      password: process.env.DEFAULT_USER_PASSWORD,
      role: 'USER',
    }),
  ]

  return Promise.all(addUsers)
}

module.exports = {
  createDefaultUser,
}
