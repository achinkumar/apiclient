var empController = require('../controller/empController');
module.exports = function(app){
app.get('/employee',empController.viewEmployee);
app.put('/employee',empController.updateEmployee);
app.post('/employee',empController.createEmployee);
app.delete('/employee',empController.deleteEmployee);
}