const axios = require('axios');
const { throwInternalServerError, throwNotFound } = require('../../utils/error');
const { filterJobs } = require('./jobHelper');

const find = async ({
  descriptionKeyword,
  locationKeyword,
  isFulltimeOnly,
  page,
  limit,
}) => {

  return await axios({
    method: 'GET',
    url: process.env.DANS_API_BASE_URL + '/api/recruitment/positions.json',
  }).then((response) => {

    let data = filterJobs({ data: response?.data ?? [], descriptionKeyword, locationKeyword, isFulltimeOnly })

    // paginate
    data = data.slice(limit * (page - 1), limit * page)

    return data
  }).catch((err) => {
    return throwInternalServerError('fail call 3rd party service:', err)
  })
}

const count = async ({
  descriptionKeyword,
  locationKeyword,
  isFulltimeOnly,
}) => {
  return await axios({
    method: 'GET',
    url: process.env.DANS_API_BASE_URL + '/api/recruitment/positions.json',
  }).then((response) => {

    return filterJobs({ data: response?.data ?? [], descriptionKeyword, locationKeyword, isFulltimeOnly })?.length

  }).catch((err) => {
    return throwInternalServerError('fail call 3rd party service:', err)
  })
}

const countAll = async () => {
  return await axios({
    method: 'GET',
    url: process.env.DANS_API_BASE_URL + '/api/recruitment/positions.json',
  }).then((response) => {
    return response?.data?.length
  }).catch((err) => {
    return throwInternalServerError('fail call 3rd party service:', err)
  })
}

const findOneById = async (id) => {
  return await axios({
    method: 'GET',
    url: process.env.DANS_API_BASE_URL + '/api/recruitment/positions/' + id,
  }).then((response) => {

    if (!response.data?.id) {
      return throwNotFound('Job not found.')
    }

    return response.data

  })
}

module.exports = {
  find,
  count,
  countAll,
  findOneById,
}
