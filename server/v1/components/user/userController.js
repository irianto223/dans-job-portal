const userService = require('./userService')
const httpResponse = require('../../utils/httpResponse')

const getListUsers = async (req, res, next) => {
  const users = await userService.getListUsers()
  return httpResponse.ok(res, users, {})
}

module.exports = {
  getListUsers,
}
