const express = require('express')
const cors = require('cors')
const app = express()
const responseHelper = require('./util/ResponseHelper')
const { WHITELISTED_CLIENTS, PORT, IS_PROD } = require('./helper/EnvHelper')

const corsOptions = {
    origin: (origin, callback) => {
        // CORS = Cross Origin Resource Sharing
        // allow requests from only trusted i.e., whitelisted origins
        // if origin is undefined, that means the request is being sent from the same server
        // or any REST API testing tool
        // https://github.com/expressjs/cors/issues/113#issuecomment-294159738
        if (WHITELISTED_CLIENTS.split(',').indexOf(origin) !== -1 || origin === undefined) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions))     // enable CORS 
app.use(express.json())     // receive JSON input (data) from client
app.use(require('./routes/routes'))
app.use((error, req, resp, next) => {

    if (!error) {
        return next()
    }

    // if in production mode, do not send full error trace to end user
    if (IS_PROD) {
        error.message = 'Internal server error'
    }

    return responseHelper.error(resp, error.message)
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})