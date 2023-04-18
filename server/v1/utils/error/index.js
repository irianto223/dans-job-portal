const BAD_REQUEST = 'bad_request'
const UNPROCESSABLE_ENTITY = 'unprocessable_entity'
const UNAUTHORIZED = 'unauthorized'
const FORBIDDEN = 'forbidden'
const NOT_FOUND = 'not_found'
const INTERNAL_SERVER_ERROR = 'internal_server_error'

const throwBadRequest = (message = 'Bad Request!') => {
  let e = new Error(message)
  e.name = BAD_REQUEST
  throw e
}

const throwUnprocessableEntity = (message = 'Unprocessable Entity!') => {
  let e = new Error(message)
  e.name = UNPROCESSABLE_ENTITY
  throw e
}

const throwUnauthorized = (message = 'Unauthorized!') => {
  let e = new Error(message)
  e.name = UNAUTHORIZED
  throw e
}

const throwForbidden = (message = 'Forbidden!') => {
  let e = new Error(message)
  e.name = FORBIDDEN
  throw e
}

const throwNotFound = (message = 'Not Found!') => {
  let e = new Error(message)
  e.name = NOT_FOUND
  throw e
}

const throwInternalServerError = (message = 'Internal Server Error!') => {
  let e = new Error(message)
  e.name = INTERNAL_SERVER_ERROR
  throw e
}

const throwCustomError = (errorName) => {
  let e = new Error()
  e.name = errorName
  throw e
}

module.exports = {
  BAD_REQUEST,
  UNPROCESSABLE_ENTITY,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  throwBadRequest,
  throwUnprocessableEntity,
  throwUnauthorized,
  throwForbidden,
  throwNotFound,
  throwInternalServerError,
  throwCustomError,
}
