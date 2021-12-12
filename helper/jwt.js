require('dotenv').config()
const jwt = require('jsonwebtoken')

const encodeData = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: process.env.TOKEN_EXP_PERIOD
    })
}

const decodeData = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        throw new Error('Invalid token')
    }
}

module.exports = {
    encodeData,
    decodeData
}