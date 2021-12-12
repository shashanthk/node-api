require('dotenv').config()

const WHITELISTED_CLIENTS = process.env.WHITELISTED_CLIENTS || ''   // cors related endpoints
const PORT = process.env.PORT || 3000
const IS_PROD = (process.env.IS_PROD || 'true') === 'true'
const OPEN_ROUTES = process.env.OPEN_ROUTES || ''
const JWT_SECRET = process.env.JWT_SECRET
const TOKEN_EXP_PERIOD = process.env.TOKEN_EXP_PERIOD || '24h'

module.exports = {
    WHITELISTED_CLIENTS: WHITELISTED_CLIENTS,
    PORT: PORT,
    IS_PROD: IS_PROD,
    OPEN_ROUTES: OPEN_ROUTES,
    JWT_SECRET: JWT_SECRET,
    TOKEN_EXP_PERIOD: TOKEN_EXP_PERIOD
}