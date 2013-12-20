/*
 * GET home page.
 */

//exports.index = function(req, res){
//    res.render('index', { title: 'Express' });
//};
var needle = require('needle');

exports.viewEmployee = function (req, res) {
    needle.get('http://mypayapi.herokuapp.com/employee', function (error, response, body) {
        if (error) {
            res.json(error);
        } else {            
            res.json(body);
        }
    });

};

exports.updateEmployee = function (req, res) {
    needle.put('http://mypayapi.herokuapp.com/employee','', function (error, response, body) {
        if (error) {
            res.json(error);
        } else {
            res.json(body);
        }
    });
};

exports.createEmployee = function (req, res) {
    needle.post('http://mypayapi.herokuapp.com/employee','', function (error, response, body) {
        if (error) {
            res.json(error);
        } else {
            res.json(body);
        }
    });
};
exports.deleteEmployee = function (req, res) {
    needle.delete('http://mypayapi.herokuapp.com/employee','', function (error, response, body) {
        if (error) {
            res.json(error);
        } else {
            res.json(body);
        }
    });
};
exports.errorEmployee = function (req, res) {
    needle.get('http://mypayapi.herokuapp.com/employeeErr', function (error, response, body) {
        if (error) {
            res.json(error);
        } else {
            res.json(body);
        }
    });
};