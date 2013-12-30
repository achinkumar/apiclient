
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./router');
var http = require('http');
var path = require('path');
var ejs = require('ejs');
var app = express();

// all environments
app.set('port', process.env.PORT || 5000);
//app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.set('views',__dirname + '/views');
app.set('view options', { layout:false, root: __dirname + '/views' } );
app.use('/public', express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, '/public')));
app.engine('html', require('ejs').renderFile);



//routes
require('./router')(app);

//exposing$ app
exports = module.exports = app;



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
