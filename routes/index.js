/*
 * GET home page.
 */

//exports.index = function(req, res){
//    res.render('index', { title: 'Express' });
//};
var needle = require('needle');

exports.viewEmployee = function (req, res) {
    needle.get('http://localhost:3000/employee', function (error, response, body) {
        if (error) {
            res.json(error);
        } else {            
            res.json(body);
        }
    });

};

exports.updateEmployee = function (req, res) {
    needle.put('http://localhost:3000/employee','', function (error, response, body) {
        if (error) {
            res.json(error);
        } else {
            res.json(body);
        }
    });
};

exports.createEmployee = function (req, res) {
    needle.post('http://localhost:3000/employee','', function (error, response, body) {
        if (error) {
            res.json(error);
        } else {
            res.json(body);
        }
    });
};
exports.deleteEmployee = function (req, res) {
    needle.delete('http://localhost:3000/employee','', function (error, response, body) {
        if (error) {
            res.json(error);
        } else {
            res.json(body);
        }
    });
};
exports.errorEmployee = function (req, res) {
    needle.get('http://localhost:3000/employeeErr', function (error, response, body) {
        if (error) {
            res.json(error);
        } else {
            res.json(body);
        }
    });
};