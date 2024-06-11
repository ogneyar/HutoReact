
const User = require('./User')
const Cart = require('./Cart')
const Product = require('./Product')
const Category = require('./Category')
const Token = require('./Token')
const Delivery = require('./Delivery')
const Order = require('./Order')


User.hasOne(Cart)
Cart.belongsTo(User)

Category.hasMany(Product)
Product.belongsTo(Category)

User.hasMany(Token)
Token.belongsTo(User)

User.hasMany(Delivery)
Delivery.belongsTo(User)


module.exports = {
    User,
    Cart,
    Product,
    Category,
    Token,
    Delivery,
    Order
}
