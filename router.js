module.exports = function (app) {


    require('./routes/employeeRoutes.js')(app);
    require('./routes/matrixRoutes.js')(app);
    require('./routes/orderRoutes.js')(app);


}