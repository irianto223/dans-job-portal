const User = require('./user')

const getList = async () => {
  return await User.findAll()
}

const create = async (user) => {
  return await User.create(user)
}

const findOneByEmailOrUsername = async (email, username) => {
  return await User.findOne({
    $or: [
      { email: { $eq: email } },
      { username: { $eq: username } },
    ],
  })
}

const findOneByUsername = async (username) => {
  return await User.findOne({
    where: { username: username },
    raw: true,
  })
}

module.exports = {
  getList,
  create,
  findOneByEmailOrUsername,
  findOneByUsername,
}
