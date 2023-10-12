
const nodemailer = require('nodemailer')

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT_SECURE,
            // port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async send(to, data) {
        try {
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
