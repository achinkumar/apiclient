var matrixController = require('../controller/matrixController');
module.exports = function(app){
app.get('/matrix',matrixController.matrix);


}
