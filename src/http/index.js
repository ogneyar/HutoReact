
import axios from 'axios'
import { API_URL } from '../utils/consts'


const $host = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

export {
    $host
}