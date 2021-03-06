var assert = require("assert");
var needle = require("needle");
var config = require('../config');
var orderDao = require('../dao/orderDao');
var orderController = require('../controller/orderController');

var updateObject;
var deleteObject;
var findObject;
var findIdObject;
var findRandomKey = Math.random();
var findRandomValue = Math.random();
var deleteRandomValue = Math.random();
var deleteRandomKey = Math.random();

    before(function () {
        var deleteObjectJson = {
            "a": "b",
            deleteRandomKey: deleteRandomValue
        };
        orderDao.addToMongo(deleteObjectJson, function (err, result) {
            console.log(result);
            deleteObject = result[0];
        });
        var updateObjectJson = {
            "a": "b"
        };
        orderDao.addToMongo(updateObjectJson, function (err, result) {
            updateObject = result[0];
        });
        var findObjectJson = {
            "a": "b"
        };

        orderDao.addToMongo(findObjectJson, function (err, result) {
            findObject = result[0];
            delete findObject['_id'];
        });
        var findIdObjectJson = {
            "a": "b",
            findRandomKey: findRandomValue
        };

        orderDao.addToMongo(findIdObjectJson, function (err, result) {
            findIdObject = result[0];
        });


    });
    describe('Test', function () {
        it('createOrder', function (done) {
            var inputCreateJson = {
                "a": "bob"
            };
            needle.post(config.url, inputCreateJson, function (err, response, body) {
                // console.log(' >>>>  ' + JSON.stringify(body));                
                assert.equal(err, null);
                assert.equal(typeof (body), "object");
                assert.equal(body[0].a, "bob");
                done();

            })
        });


        it('updateOrder', function (done) {

            var updateData = {'updateKey':'updateVal'}
            needle.put(config.url+updateObject._id, updateData, function (err, response, body) {
                //console.log("dflfjdkfld" + body);
                assert.equal(err, null);
                assert.equal(typeof (body), "object");
                // assert.equal(body[0].a, "b");
                assert.equal(body.records_updated, 1);

                done();
            })
        });


        it('findOrder', function (done) {

            needle.post(config.url+'get',
                findObject, function (err, response, body) {
                    assert.equal(err, null);
                    assert.equal(typeof (body[0]), "object");
                    assert.equal(typeof (body[0]._id), "string");
                    assert.equal(body[0].a, findObject.a);

                    done();

                })
        });

        it('findById', function (done) {
            var inputJson = {
                "_id": findIdObject._id
            };
            needle.post(config.url+'id/'+findIdObject._id.toString(), inputJson, function (err, response, body) {
                // console.log(JSON.stringify(body));
                assert.equal(err, null);
                assert.equal(typeof (body), "object");
                assert.equal(body.a, "b");
                // assert.equal(body[0]._id, findIdObject._id.toString());
                done();

            })
        });

        it('deleteFromMongo', function (done) {

            needle.delete(config.url+"del/" + deleteObject._id, "", function (err, response, body) {
                assert.equal(err, null);
                done();

            });
        });

    });
after(function (done) {
    config.dbc.collection(config.TABLE_PAYCART).remove({},function(){
    done();                                })
})
