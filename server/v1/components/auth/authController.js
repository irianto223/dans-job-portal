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

    const result = await authService.auth(username, password)
    return httpResponse.ok(res, result.data, result.meta)

  } catch (error) {
    if (error.name == NOT_FOUND) {
      return httpResponse.notFound(res, undefined, undefined, error.message)
    }
    else if (error.name == FORBIDDEN) {
      return httpResponse.forbidden(res, undefined, undefined, error.message)
    }
    else {
      return httpResponse.internalServerError(res, undefined, undefined, error.message)
    }
  }
}

module.exports = {
  auth,
}
