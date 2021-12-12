const { OPEN_ROUTES } = require('../helper/EnvHelper')
const jwt = require('../helper/JwtUtil')
const responseHelper = require('../util/ResponseHelper')

const basicAuth = async (req, resp, next) => {

    try {

        const path = req.path

        // if requested path is open, do not check for token
        if (!isAuthCheckRequired(path)) {
            return next()
        }

        if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
            return responseHelper.forbiddenAccess(resp, 'Missing authentication header')
        }

        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
            return responseHelper.forbiddenAccess(resp, 'Missing authentication token')
        }

        // decode data from JWT
        const decodedData = jwt.decodeData(token)

        if (!decodedData) {
            throw new Error('Invalid token')
        }

        // set details to request object
        req.user = decodedData

        // continue with request
        return next()

    } catch (error) {
        return responseHelper.authError(resp, error.message)
    }
}

// currently requested path is not in the open routes list, 
// do not allow to continue without token
const isAuthCheckRequired = (path) => {
    if (!path) return true
    return (OPEN_ROUTES.split(',').indexOf(path.substring(1)) === -1)
}

module.exports = {
    basicAuth
}