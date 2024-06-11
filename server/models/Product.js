const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // идентификатор
    name: {type: DataTypes.STRING, allowNull: false}, // наименование
    description: {type: DataTypes.STRING(8192), allowNull: false}, // описание
    gabarites: {type: DataTypes.STRING, defaultValue: null}, // габариты (100х200х50 - ширина х длина х высота, в мм)
    url: {type: DataTypes.STRING, defaultValue: null}, // ссылка на товар
    price: {type: DataTypes.DECIMAL, allowNull: false}, // цена
    rating: {type: DataTypes.FLOAT, defaultValue: 0}, // рейтинг
    img: {type: DataTypes.STRING(1024), allowNull: false}, // массив ссылок на изображения
    have: {type: DataTypes.INTEGER, defaultValue: 0}, // имеется ли товар? (вообще в продаже, на заводе)
    article: {type: DataTypes.STRING, defaultValue: null}, // артикул
    promo: {type: DataTypes.STRING, defaultValue: null}, // название акции, если товар учавствует
    country: {type: DataTypes.STRING, defaultValue: null}, // страна производитель
    request: {type: DataTypes.TINYINT, defaultValue: false}, // цена по запросу (если true, то вместо цены появляется кнопка "Запросить цену")
    stock: {type: DataTypes.INTEGER, defaultValue: 1} // количество товара на складе
})

module.exports = Product