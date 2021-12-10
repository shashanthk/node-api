const responseHelper = require('../util/ResponseHelper')

const login = async (req, resp, next) => {
    return responseHelper.success(resp, null, 'Login Works')
}

const authCheck = async (req, resp, next) => {
    return responseHelper.success(resp, null, 'Auth check passed')
}

module.exports = {
    login,
    authCheck
}