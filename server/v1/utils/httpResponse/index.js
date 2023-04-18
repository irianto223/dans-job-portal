const ok = (res, data, meta, message, code) => {
  res.status(200)
  res.json({
    status: true,
    code: code || '200 OK',
    message: message || 'success',
    meta,
    data,
  })
}

const created = (res, data, meta, message, code) => {
  res.status(201)
  res.json({
    status: true,
    code: code || '201 Created',
    message: message || 'success',
    meta,
    data,
  })
}

const badRequest = (res, data, meta, message, code) => {
  res.status(400)
  res.json({
    status: false,
    code: code || '400 Bad Request',
    message: message || 'request error',
    meta,
    data,
  })
}

const unauthorized = (res, data, meta, message, code) => {
  res.status(401)
  res.json({
    status: false,
    code: code || '401 Unauthorized',
    message: message || 'access unauthorized',
    meta,
    data,
  })
}

const forbidden = (res, data, meta, message, code) => {
  res.status(403)
  res.json({
    status: false,
    code: code || '403 Forbidden',
    message: message || 'access forbidden',
    meta,
    data,
  })
}

const notFound = (res, data, meta, message, code) => {
  res.status(404)
  res.json({
    status: false,
    code: code || '404 Not Found',
    message: message || 'resource not found',
    meta,
    data,
  })
}

const internalServerError = (res, data, meta, message, code) => {
  res.status(500)
  res.json({
    status: false,
    code: code || '500 Internal Server Error',
    message: message || 'internal error',
    meta,
    data,
  })
}

module.exports = {
  ok,
  created,
  badRequest,
  notFound,
  unauthorized,
  forbidden,
  internalServerError,
}
