const User = require('./user')

const getList = async () => {
  return await User.scope('withoutPassword').findAll()
}

const create = async (user) => {
  return await User.create(user)
}

const findOneByEmailOrUsername = async (email, username) => {
  return await User.scope('withoutPassword').findOne({
    $or: [
      { email: { $eq: email } },
      { username: { $eq: username } },
    ],
  })
}

const findOneByUsername = async (username) => {
  return await User.scope('withoutPassword').findOne({
    where: { username: username },
    raw: true,
  })
}

const findOneById = async (id) => {
  return await User.scope('withoutPassword').findByPk(id, { raw: true })
}

module.exports = {
  getList,
  create,
  findOneByEmailOrUsername,
  findOneByUsername,
  findOneById,
}
