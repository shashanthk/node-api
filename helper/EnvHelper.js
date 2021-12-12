
const WHITELISTED_CLIENTS = process.env.WHITELISTED_CLIENTS ?? ''
const PORT = process.env.PORT | 3000

module.exports = {
    WHITELISTED_CLIENTS: WHITELISTED_CLIENTS,
    PORT: PORT
}