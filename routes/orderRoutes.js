var orderController = require('../controller/orderController');
var orderDao = require('../dao/orderDao');
module.exports = function (app) {
    app.put('/order', orderController.updateOrder);
    app.post('/order', orderController.createOrder);
    app.get('/order',orderController.index);
    app.post('/order', orderController.findOrder);
    
}