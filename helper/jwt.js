const { JWT_SECRET, TOKEN_EXP_PERIOD } = require('../helper/EnvHelper')
const jwt = require('jsonwebtoken')

const encodeData = (data) => {
    return jwt.sign(data, JWT_SECRET, {
        expiresIn: TOKEN_EXP_PERIOD
    })
}

const decodeData = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET)
    } catch (error) {
        throw new Error('Invalid token')
    }
}

module.exports = {
    encodeData,
    decodeData
}