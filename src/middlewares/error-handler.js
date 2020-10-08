const Boom = require('boom')

const boomifyErrorsMiddleware = (err, req, res, next) => {
  if (!err) return next()
  if (!(err instanceof Error)) err = new Error(err)
  return next(err.isBoom ? err : Boom.boomify(err))
}

const errorHandlerMiddleware = (err, req, res, next) => {
  if (!err) return next()
  const payload = Object.assign(
    {},
    err.output.payload,
    err.data && err.data,
    err.stack 
  )
  return res.status(err.output.statusCode).json(payload)
}

module.exports = {
  boomifyErrorsMiddleware,
  errorHandlerMiddleware
}