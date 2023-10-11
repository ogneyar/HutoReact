
const Router = require('express')
const router = new Router()

const mailController = require('../controllers/mailController')

if (process.env.URL_API === "http://localhost:5000") {
    router.get('/support', mailController.support) 
    router.get('/test', mailController.test) 
}
router.post('/support', mailController.support) 

module.exports = router
