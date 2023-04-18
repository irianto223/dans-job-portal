const authService = require('./authService')
const httpResponse = require('../../utils/httpResponse')
const { NOT_FOUND, UNPROCESSABLE_ENTITY, FORBIDDEN } = require('../../utils/error')
const { extractBasicToken, extractUsername, extractPassword } = require('./authHelper')

const auth = async (req, res, next) => {

  // req.headers.authorization example: "Basic some-random-token"

  const basicToken = extractBasicToken(req.headers)
  const username = extractUsername(basicToken)
  const password = extractPassword(basicToken)

  try {

    const data = await authService.auth(username, password)
    return httpResponse.ok(res, data)

  } catch (error) {
    if (error.name == NOT_FOUND) {
      return httpResponse.notFound(res, null, null, error.message)
    }
    else if (error.name == FORBIDDEN) {
      return httpResponse.forbidden(res, null, null, error.message)
    }
    else {
      return httpResponse.internalServerError(res, null, null, error.message)
    }
  }
}

module.exports = {
  auth,
}
