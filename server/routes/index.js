
const Router = require('express')
const router = new Router()

const mailRouter = require('./mailRouter')


router.use('/mail', mailRouter)
router.use('/test', (req, res) => {
    return res.json("response")
})


module.exports = router
