const User = require('./user')

const getList = async () => {
  return await User.findAll()
}

module.exports = {
  getList,
}
