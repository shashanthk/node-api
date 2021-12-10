
const authError = (resp, message) => {
    resp.status(401).send({
        status: -1,
        data: null,
        description: message ? message : 'Auth error'
    })
}

const success = (resp, data, message = null) => {
    resp.status(200).send({
        status: 1,
        data: data,
        description: message ? message : ''
    })
}

const error = (resp, message = null) => {
    resp.status(500).send({
        status: -1,
        data: null,
        description: message ? message : 'Internal server error'
    })
}

module.exports = {
    authError,
    success,
    error
}