//var config = require('../config');
var config = require('../config');


//adds data to Mongo.

exports.addToMongo = function (insertData, callback) {
    config.dbc.collection(config.TABLE_PAYCART).insert(insertData, callback);
    //        db.collection('paycart').insert(reqData, function(err,res){
    //            callback(err,res);
    //        });
};

//updates Mongo with the provided data.

exports.updateMongo = function (updateData, callback) {
    config.dbc.collection(config.TABLE_PAYCART).insert(updateData, callback);

};

exports.findInMongo = function (findData, callback) {
    config.dbc.collection(config.TABLE_PAYCART).find(findData).toArray(callback);

};

exports.findIdInMongo = function (findData, callback) {
    console.log('>>> fi'+findData._id);
    config.dbc.collection(config.TABLE_PAYCART).findOne({
        "_id": config.dbc.ObjectID.createFromHexString(findData._id)
    },callback);

}
exports.deleteFromMongo = function (delData, callback) {
    
    config.dbc.collection(config.TABLE_PAYCART).remove({
        "_id": config.dbc.ObjectID(delData._id)
    },callback);

}