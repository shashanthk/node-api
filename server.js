require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const responseHelper = require('./util/ResponseHelper')

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

const port = process.env.PORT | 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})