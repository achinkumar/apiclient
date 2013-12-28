var orderController = require('../controller/orderController');
module.exports = function (app) {
    app.put('/order', orderController.updateOrder);
    app.post('/order', orderController.createOrder);
    app.get('/order',orderController.index);
}