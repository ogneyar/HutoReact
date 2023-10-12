

const mailService = require('../service/mailService')


class mailController {
    
    async support(req, res, next) {
        try {
            let body = req.body
            if (!body || body.email === undefined) body = req.query
            if (!body || body.email === undefined) return next(res.json( { error: 'Отсутствуют необходимые параметры!' } ))
            let response = false
            await mailService.send(process.env.ADMIN_EMAIL, body) 
                .then(data => {
                    if (data.errno || data.code) console.log(JSON.stringify(data))
                    else response = true
                    // console.log(JSON.stringify(data))
                })
                .catch(err => console.log(err))

            return res.json(response)
        }catch(e) {
            return next(res.json( { error: 'Ошибка метода support! ' + e } ))
        }
    }   
    
    async test(req, res, next) {
        try {
            return res.json("response")
        }catch(e) {
            return next(res.json( { error: 'Ошибка метода test! ' + e} ))
        }
    }   

}

module.exports = new mailController()
