const router = require('express').Router()
const authInterceptor = require('../helper/interceptor')

const authController = require('../controller/AuthController')

router.get('/login', authInterceptor.basicAuth, authController.login)
router.get('/test-auth', authInterceptor.basicAuth, authController.authCheck)

module.exports = router
