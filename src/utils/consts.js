
const URL_PRODUCTION  = process.env.REACT_APP_URL_PRODUCTION || "https://hutoryanin.ru/"
const URL_TEST  = process.env.REACT_APP_URL_TEST || "https://hutorit.ru/" 
const URL_DEVELOPMENT  = process.env.REACT_APP_URL_DEVELOPMENT || "http://localhost:3000/"

const API_URL_PRODUCTION = process.env.REACT_APP_API_URL_PRODUCTION || "https://server.hutoryanin.ru/"
const API_URL_TEST = process.env.REACT_APP_API_URL_TEST || "https://server.hutorit.ru/"
const API_URL_DEVELOPMENT = process.env.REACT_APP_API_URL_DEVELOPMENT || "http://localhost:5000/"

export const URL = 
    process.env.REACT_APP_ENV === 'production' 
    ? window.location.hostname === "hutoryanin.ru" || window.location.hostname === "www.hutoryanin.ru"
        ? URL_PRODUCTION 
        : URL_TEST
    : URL_DEVELOPMENT

export const API_URL = 
    process.env.REACT_APP_ENV === 'production' 
    ? window.location.hostname === "hutoryanin.ru" || window.location.hostname === "www.hutoryanin.ru"
        ? API_URL_PRODUCTION
        : API_URL_TEST
    : API_URL_DEVELOPMENT
        