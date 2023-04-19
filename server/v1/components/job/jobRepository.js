const axios = require('axios');
const { throwInternalServerError } = require('../../utils/error');

const find = async () => {
  return await axios({
    method: 'GET',
    url: process.env.DANS_API_BASE_URL + '/api/recruitment/positions.json',
  }).then((response) => {
    return response?.data ?? []
  }).catch((err) => {
    return throwInternalServerError('fail call 3rd party service')
  })
}

const count = async () => {
  return await axios({
    method: 'GET',
    url: process.env.DANS_API_BASE_URL + '/api/recruitment/positions.json',
  }).then((response) => {
    return response?.data?.length
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

module.exports = {
  find,
  count,
  countAll,
}
