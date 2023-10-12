
const nodemailer = require('nodemailer')

class MailService {

    secure = false
    // secure = true

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: this.secure ? process.env.SMTP_PORT_SECURE : process.env.SMTP_PORT,
            secure: this.secure,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async send(to, data) {
        try {
            // console.log(process.env.SMTP_USER)
            let response = await this.transporter.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: 'Сообщение с сайта ХуторянинЪ!',
                text: '',
                html: `<div><h1>Сообщение от ${data.email}</h1><p>${data.message}</p></div>`
            })
            
            return response
        
        }catch(e) {
            return e
        }
    }

}

module.exports = new MailService()
