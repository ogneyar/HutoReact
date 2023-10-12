
const nodemailer = require('nodemailer')

class MailService {

    secure = false
    secure = true

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: this.secure ? process.env.SMTP_PORT_SECURE : process.env.SMTP_PORT,
            secure: this.secure,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            },
            logger: process.env.SMTP_LOGGER == "true" ? true : false
        })
    }

    async send(to, data) {
        try {
            let response = await this.transporter.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: 'Сообщение с сайта ХуторянинЪ!',
                text: '',
                html: `<div><h2>Сообщение от ${data.email}</h2><p>${data.message}</p></div>`
            })
            
            return response
        
        }catch(e) {
            return e
        }
    }

    async test(to, data) {
        try {
            let response = await this.transporter.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: 'Тестовое сообщение с сайта ХуторянинЪ!',
                text: '',
                html: `<div><h2>Сообщение от ${data.email}</h2><p>${data.message}</p></div>`,
                attachments: [
                    {   // utf-8 string as an attachment
                        filename: 'text1.txt',
                        content: 'hello world!'
                    },
                    {   // binary buffer as an attachment
                        filename: 'text2.txt',
                        content: new Buffer.from('hello world!','utf-8')
                    },
                    {   // file on disk as an attachment
                        filename: 'text3.txt',
                        path: 'server/service/file.txt' // stream this file
                    },
                    {   // use URL as an attachment
                        filename: 'text4.txt',
                        path: 'https://raw.github.com/ogneyar/HutoReact/master/server/service/file.txt'
                    },
                    {   // encoded string as an attachment
                        filename: 'text5.txt',
                        content: 'aGVsbG8gd29ybGQh',
                        encoding: 'base64'
                    }, 
                    {   // data uri as an attachment
                        path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
                    }
                ]
            })
            
            return response
        
        }catch(e) {
            return e
        }
    }

}

module.exports = new MailService()
