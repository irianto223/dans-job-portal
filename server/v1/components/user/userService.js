const userRepository =  require('./userRepository')

const getListUsers = async () => {
  return userRepository.getList()
}

module.exports = {
  getListUsers,
}
