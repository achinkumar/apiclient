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
exports.updateMongo = function (updateId, updateData, callback) {
    var updateQuery = {
        '_id': config.dbc.ObjectID(updateId)
    }
    config.dbc.collection(config.TABLE_PAYCART).update(updateQuery, updateData, function (err, res) {
        callback(err, {
            'records_updated': res
        });
    });

};

exports.findInMongo = function (findData, callback) {
    config.dbc.collection(config.TABLE_PAYCART).find(findData).toArray(callback);

};

exports.findIdInMongo = function (findId, callback) {
    config.dbc.collection(config.TABLE_PAYCART).findOne({
        "_id": config.dbc.ObjectID(findId)
    }, callback);

}
exports.deleteFromMongo = function (delData, callback) {

    config.dbc.collection(config.TABLE_PAYCART).remove({
        "_id": config.dbc.ObjectID(delData._id)
    }, callback);

}