const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')
const authInterceptor = require('../helper/Interceptor')
const responseHelper = require('../util/ResponseHelper')
const { IS_PROD } = require('../helper/EnvHelper')

const authController = require('../controller/AuthController')
const todoController = require('../controller/TodoController')

// api documentation
// show only in development server
if (!IS_PROD) {
    router.use('/api-docs', swaggerUi.serve)
    router.get('/api-docs', swaggerUi.setup(swaggerDocument))
}

router.get('/', (req, resp) => {
    return responseHelper.success(resp, null, 'Server is active')
})

// auth
router.post('/authenticate', authController.login)

// todos
router.get('/todos', authInterceptor.basicAuth, todoController.listTodos)

// global 404 error handler
router.get('*', (req, resp) => {
    return responseHelper.routeNotFound(resp)
})

module.exports = router
