require('dotenv').config()
const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
    {
        dialect: process.env.DB,
        storage: process.env.DB_STORAGE,
        dialectOptions: {
            charset: 'utf8mb4'
        },
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
        },
        logging: process.env.DB_LOGGING == "true" ? true : false,
        pool: {
            acquire: 120000 // количество секунд (120)
        }
    }
)