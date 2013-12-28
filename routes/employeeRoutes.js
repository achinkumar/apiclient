var routes = require('../controller/empController');
module.exports = function(app){
app.get('/employee',routes.viewEmployee);
app.put('/employee',routes.updateEmployee);
app.post('/employee',routes.createEmployee);
app.delete('/employee',routes.deleteEmployee);
}