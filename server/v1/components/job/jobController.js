const jobService = require('./jobService')
const httpResponse = require('../../utils/httpResponse')
const { FORBIDDEN, BAD_REQUEST, UNAUTHORIZED, NOT_FOUND } = require('../../utils/error')

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
      return httpResponse.badRequest(res, undefined, undefined, error.message)
    }
    else if (error.name == FORBIDDEN) {
      return httpResponse.forbidden(res, undefined, undefined, error.message)
    }
    else if (error.name == UNAUTHORIZED) {
      return httpResponse.unauthorized(res, undefined, undefined, error.message)
    }
    else {
      return httpResponse.internalServerError(res, undefined, undefined, error.message)
    }

  }
}

const getJobById = async (req, res, next) => {

  try {

    const detailJob = await jobService.getJobById(req.params.id)
    return httpResponse.ok(res, detailJob)

  } catch (error) {

    if (error.name == NOT_FOUND) {
      return httpResponse.notFound(res, undefined, undefined, error.message)
    }
    else if (error.name == FORBIDDEN) {
      return httpResponse.forbidden(res, undefined, undefined, error.message)
    }
    else if (error.name == UNAUTHORIZED) {
      return httpResponse.unauthorized(res, undefined, undefined, error.message)
    }
    else {
      return httpResponse.internalServerError(res, undefined, undefined, error.message)
    }
  }
}

module.exports = {
  getJobs,
  getJobById,
}
