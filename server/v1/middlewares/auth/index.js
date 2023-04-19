const jwt = require('jsonwebtoken')
const httpResponse = require('../../utils/httpResponse')
const userRepo = require('../../components/user/userRepository')

const authenticate = async (req, res, next) => {

  const bearerToken = req.headers?.authorization?.split?.('Bearer ')?.[1]

  // handle not login
  if (!bearerToken) {
    return httpResponse.forbidden(res)
  }

  const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET)

  const user = await userRepo.findOneById(decoded.sub)
  if (!user) {
    return httpResponse.notFound('User not found.')
  }

  // add user object in req
  req.user = user

  next()
}

const authorizeRole = (allowedRoles) => async (req, res, next) => {

  const bearerToken = req.headers?.authorization?.split?.('Bearer ')?.[1]

  // handle not login
  if (!bearerToken) {
    return httpResponse.forbidden(res)
  }

  const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET)

  const user = await userRepo.findOneById(decoded.sub)
  if (!user) {
    return httpResponse.notFound('User not found.')
  }

  if (!['SUPERADMIN', ...allowedRoles].includes(user.role)) {
    return httpResponse.unauthorized(res, `${user.role} not authorized to access this resource.`)
  }

  next()
}

module.exports = {
  authenticate,
  authorizeRole,
}
