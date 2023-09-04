
import { $host } from './index'

export const sendMail = async (email, message) => {
    const {data} = await $host.get('api/mail.php', {params: {
        operacion: "42",
        email,
        message
    }}) 
    return data  
}
