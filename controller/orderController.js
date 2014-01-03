var ejs = require('ejs');
var orderDao = require('../dao/orderDao');

//receives a json,inserts it in mongo and returns the same to response.
var processRequest = function (fullObj) {
    fullObj = fullObj.data;
    //TODO need to get back at this while working on metadata
}
var processResponse = function (fullObj) {
    var retObj = {};
    retObj['data'] = fullObj;
    retObj['metadata'] = {};
    fullObj = retObj;

    //TODO need to get back at this while working on metadata
}
exports.createOrder = function (req, res) {
    var reqData = req.body;
    processRequest(reqData);
    orderDao.addToMongo(reqData, function (err, result) {
        if (err) {
            console.log("error occurred while creating order" + err);
            var errHandle = {
                "error": err
            };
            processResponse(errHandle);
            res.json(errHandle);
        }
        processResponse(result);
        res.json(result);
    });
};



// receives a json,updates mongo and returns the same to response.

exports.updateOrder = function (req, res) {
    var reqData = req.body;
    processRequest(reqData);
    orderDao.updateMongo(reqData, function (err, result) {
        if (err) {
            console.log("error occurred while updating order" + err);
            var errHandle = {
                "error": err
            };
            processResponse(errHandle);
            res.json(errHandle);
        }
        processResponse(result);
        res.json(result);
    });
};

//receives a json,finds related data in mongo and returns it to response.
exports.findOrder = function (req, res) {
    var reqData = req.body;
    processRequest(reqData);
    orderDao.findInMongo(reqData, function (err, result) {
        if (err) {
            console.log("error occurred while finding order" + err);
            var errHandle = {
                "error": err
            };
            processResponse(errHandle);
            res.json(errHandle);
        }
        processResponse(result);
        res.json(result);
    });
};

//find data related to the id provided in json and returns the reponse.
exports.findById = function (req, res) {
    var reqData = req.body;
    processRequest(reqData);
    orderDao.findIdInMongo(reqData, function (err, result) {
        console.log('find by id result '+result);
        if (err) {
            console.log("error occurred while finding order by Id" + err);
            var errHandle = {
                "error": err,
            };
            processResponse(errHandle);
            res.json(errHandle);
        }
        processResponse(result);
        res.json(result);
    });
};

exports.deleteOrder = function (req, res) {
    var reqData = {
        "_id": req.params.id
    };
    console.log(reqData);
    // processRequest(reqData);
    orderDao.deleteFromMongo(reqData, function (err, result) {
        console.log(result);
        if (err) {
            console.log("error occurred while deleting order"+err);
            var errHandle = {
                "error": err
            };
            processResponse(errHandle);
            res.json(errHandle);
        }
        processResponse(result);
        res.json(result);
    });
//    res.json("element deleted");
};

//displays the webpage
exports.index = function (req, res) {
    res.render('../views/paycart/pay.ejs');

};