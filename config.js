'use strict';



exports.port = process.env.PORT || 5000;
//exports.mongodb = {
//  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'localhost:27017/paycart'
//};
//var mongo = require('mongoskin');
// 
//var db = mongo.db('127.0.0.1:27017/paycart');
exports.companyName = 'Prokriya, Inc.';
exports.projectName = 'Paycart';
exports.dbc = require('mongoskin').db(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'localhost:27017/paycart');
exports.TABLE_PAYCART =  'paycart';