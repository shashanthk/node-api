require('dotenv').config()
const express = require('express')
const cors = require('cors');

const app = express()
const responseHelper = require('./util/ResponseHelper');
const { WHITELISTED_CLIENTS, PORT } = require('./helper/EnvHelper');

let corsOptions = {
    origin: function (origin, callback) {
        if (WHITELISTED_CLIENTS.split(',').indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions));

app.use(cors())     // enable CORS 
app.use(express.json())     // receive JSON input (data) from client
app.use(require('./routes/routes'))
app.use((error, req, resp, next) => {

    if (!error) {
        return next()
    }

    // if in production mode, do not send full error trace to end user
    if (process.env.IS_PROD === 'true') {
        error.message = 'Internal server error'
    }

    return responseHelper.error(resp, error.message)
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})