var ejs = require('ejs');
exports.matrix = function (req, res) {

    var matrix = {};

    var row1 = {
        "a": Math.random(),
        'b': Math.random(),
        'c': Math.random(),
        'd': Math.random(),
        'e': Math.random()
    };
    var row2 = {
        "a": Math.random(),
        'b': Math.random(),
        'c': Math.random(),
        'd': Math.random(),
        'e': Math.random()
    };
    var row3 = {
        "a": Math.random(),
        'b': Math.random(),
        'c': Math.random(),
        'd': Math.random(),
        'e': Math.random()
    };
    var row4 = {
        "a": Math.random(),
        'b': Math.random(),
        'c': Math.random(),
        'd': Math.random(),
        'e': Math.random()
    };
    var row5 = {
        "a": Math.random(),
        'b': Math.random(),
        'c': Math.random(),
        'd': Math.random(),
        'e': Math.random()
    };

    var rows = [row1, row2, row3, row4, row5];
    //    console.log(JSON.stringify({'rows':rows}));
    res.render('../views/matrix/matrix.ejs', {
        'rows': rows
    });

};