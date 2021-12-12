const SUCCESS_STATUS = 1
const ERROR_STATUS = -1

const authError = (resp, message) => {
    resp.status(401).json({
        status: ERROR_STATUS,
        data: null,
        description: message ? message : 'Unauthorized'
    })
}

const forbiddenAccess = (resp, message) => {
    resp.status(403).json({
        status: ERROR_STATUS,
        data: null,
        description: message ? message : 'Forbidden'
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
        description: message ? message : 'Internal Server Error'
    })
}

const invalidInput = (resp, message = null) => {
    resp.status(422).json({
        status: ERROR_STATUS,
        data: null,
        description: message ? message : 'Unprocessable Entity'
    })
}

const routeNotFound = (resp) => {
    resp.status(404).json({
        status: ERROR_STATUS,
        data: null,
        description: 'Not Found'
    })
}

module.exports = {
    authError,
    forbiddenAccess,
    success,
    error,
    invalidInput,
    routeNotFound
}