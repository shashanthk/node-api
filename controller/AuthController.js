const responseHelper = require('../util/ResponseHelper')
const jwt = require('../helper/JwtUtil')

const login = async (req, resp, next) => {

    try {

        let emailOrMobile = req.body.email_or_mobile

        // TODO: validate inputs before sending them to database or other data source

        if (emailOrMobile === 'test@example.com' || emailOrMobile === '9876543210') {

            const data = {
                user_rid: 1,
                name: 'John Doe',
                mobile: '9876543210',
                email: 'test@example.com'
            }

            // prepare JWT 
            const token = jwt.encodeData(data)
            data.auth_token = token

            // send 200 OK response along with token
            return responseHelper.success(resp, data, 'Auth success')
        } else {
            // send 401 auth error
            return responseHelper.authError(resp, 'Invalid user credential')
        }

    } catch (error) {
        return next(error)
    }
}

const silentLogin = async (req, resp, next) => {

    try {

        // TODO: refresh token

    } catch (error) {
        return next(error)
    }

}

const authCheck = async (req, resp, next) => {
    return responseHelper.success(resp, null, 'Auth check passed')
}

module.exports = {
    login,
    authCheck
}