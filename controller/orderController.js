var ejs = require('ejs');
var orderDao = require('../dao/orderDao');

//receives a json,inserts it in mongo and returns the same to response.

exports.createOrder = function (req, res) {
    var reqData = req.body;
    orderDao.addToMongo(reqData, function (err, result) {
        if (err) {
            var errHandle = {
                "error": err,
                "detailed error": "error occurred while inserting"
            };
            res.json(errHandle);
        }
        res.json(result);
    });
};



// receives a json,updates mongo and returns the same to response.

exports.updateOrder = function (req, res) {
    var reqData = req.body;
    orderDao.updateMongo(reqData, function (err, result) {
        if (err) {
            var errHandle = {
                "error": err,
                "detailed error": "error occurred while inserting"
            };
            res.json(errHandle);
        }
        res.json(result);
    });
};

exports.findOrder = function (req, res) {
    var reqData = req.body;
    orderDao.findInMongo(reqData, function (err, result) {
        if (err) {
            var errHandle = {
                "error": err,
                "detailed error": "error occurred while inserting"
            };
            res.json(errHandle);
        }
        res.json(result);
    });
};



exports.index = function (req, res) {
    // TODO :: 
    // 1.Displays the page.
    res.render('../views/paycart/pay.ejs');

};