const {model} = require('mongoose');
const {PositionsSchema, OrdersSchema} = require('../schemas/OrdersSchema');
const OrdersModel = new model('order',OrdersSchema);
module.exports = {OrdersModel};