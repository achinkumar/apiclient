var ejs = require('ejs');
exports.createOrder = function (req, res) {
    // TODO :: 
    // 1. receivce a json from req,
    // 2. save that json to mongodb
    // 3. return the same json to response
    var reqData = req.body;
    res.json(reqData);
}
// TODO --add comments 
exports.updateOrder = function (req, res) {
    // TODO :: 
    // 1. receivce a json from req,
    // 2. save that json to mongodb
    // 3. return the same json to response
    var reqData = req.body;
    res.json(reqData);

};

// TODO --add comments 
exports.index = function (req, res) {
    // TODO :: 
    // 1.Displays the page.
    res.render('../views/paycart/pay.ejs');

};