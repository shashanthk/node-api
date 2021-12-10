require('dotenv').config()
const express = require('express')
const app = express()
const responseHelper = require('./util/ResponseHelper')

app.use(require('./routes/routes'))
app.use((error, req, resp, next) => {

    if (!error) {
        return next()
    }

    return responseHelper.error(resp, error.message)
})

const port = process.env.PORT | 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})