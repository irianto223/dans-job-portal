const jobService = require('./jobService')
const httpResponse = require('../../utils/httpResponse')
const { FORBIDDEN, BAD_REQUEST, UNAUTHORIZED } = require('../../utils/error')

const getJobs = async (req, res, next) => {

  const { description, location, full_time, page, limit } = req.query

  try {

    const result = await jobService.getJobs({
      descriptionKeyword: description,
      locationKeyword: location,
      isFulltimeOnly: full_time === 'true',
      page,
      limit,
    })

    return httpResponse.ok(res, result.data, result.meta)

  } catch (error) {

    if (error.name == BAD_REQUEST) {
      return httpResponse.badRequest(res, null, null, error.message)
    }
    else if (error.name == FORBIDDEN) {
      return httpResponse.forbidden(res, null, null, error.message)
    }
    else if (error.name == UNAUTHORIZED) {
      return httpResponse.unauthorized(res, null, null, error.message)
    }
    else {
      return httpResponse.internalServerError(res, null, null, error.message)
    }

  }
}

module.exports = {
  getJobs,
}
