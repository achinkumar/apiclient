
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.viewEmployee =function(req,res){
	var employee = {"mode":"view","data":{"emp_id":"1","name":"achin"}};
	res.json(employee);
};

exports.updateEmployee =function(req,res){
	var employee = {"mode":"update","msg":"employee records updated","data":{"emp_id":"1","name":"achin"}};
	res.json(employee);
};
exports.createEmployee =function(req,res){
	var employee = {"mode":"create","msg":"New employee created","data":{"emp_id":"1","name":"achin"}};
	res.json(employee);
};
exports.deleteEmployee =function(req,res){
	var employee = {"error":"no employee with this id","mode":"delete","msg":"employee record deleted","data":{"emp_id":"1","name":"achin"}};
	res.json(employee);
};
exports.errorEmployee =function(req,res){
	var employeeErr = {"error":"no employee with this id"};
	res.json(employeeErr);
};

