const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')
const authInterceptor = require('../helper/interceptor')
const responseHelper = require('../util/ResponseHelper')
const { IS_PROD } = require('../helper/EnvHelper')

const authController = require('../controller/AuthController')

// api documentation
// show only in development server
if (!IS_PROD) {
    router.use('/api-docs', swaggerUi.serve)
    router.get('/api-docs', swaggerUi.setup(swaggerDocument))
}

router.get('/', (req, resp) => {
    return responseHelper.success(resp, null, 'Server is active')
})
router.post('/authenticate', authController.login)
router.get('/test-auth', authInterceptor.basicAuth, authController.authCheck)

// global 404 error handler
router.get('*', (req, resp) => {
    return responseHelper.routeNotFound(resp)
})

module.exports = router
