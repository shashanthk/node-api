const SUCCESS_STATUS = 1
const ERROR_STATUS = -1

const authError = (resp, message) => {
    resp.status(401).json({
        status: ERROR_STATUS,
        data: null,
        description: message ? message : 'Auth error'
    })
}

const forbiddenAccess = (resp, message) => {
    resp.status(403).json({
        status: ERROR_STATUS,
        data: null,
        description: message ? message : 'Forbidden access'
    })
}

const success = (resp, data, message = null) => {
    resp.status(200).json({
        status: SUCCESS_STATUS,
        data: data,
        description: message ? message : ''
    })
}

const error = (resp, message = null) => {
    resp.status(500).json({
        status: ERROR_STATUS,
        data: null,
        description: message ? message : 'Internal server error'
    })
}

module.exports = {
    authError,
    forbiddenAccess,
    success,
    error
}