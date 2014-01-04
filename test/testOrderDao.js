var assert = require("assert");
var orderDao = require("../dao/orderDao");
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

    describe('test', function () {

        it('addToMongo', function (done) {
            orderDao.addToMongo({
                "a": "b"
            }, function (err, result) {
                assert.equal(err, null);
                assert.equal(typeof (result), "object");
                assert.equal(result !== null, true);
                assert.equal(result[0].a, "b");

                done();
            })
        });
        it('addToMongoUnauthorized', function (done) {
            orderDao.addToMongo("", function (err, result) {
                assert.equal(err, null);
                assert.equal(typeof (result), "object");
                assert.equal(result !== null, true);

                done();
            })
        });
        it('updateMongo', function (done) {
            orderDao.updateMongo(updateObject, function (err, result) {
                assert.equal(err, null);
                assert.equal(typeof (result), "object");
                assert.equal(result !== null, true);
                assert.equal(result[0].a, "b");
                done();
            })
        });
        it('updateMongoUnauthorized', function (done) {
            orderDao.updateMongo("", function (err, result) {
                assert.equal(err, null);
                assert.equal(typeof (result), "object");
                assert.equal(result !== null, true);
                done();
            })
        });
        it('findInMongo', function (done) {
            orderDao.findInMongo(findObject, function (err, result) {
                assert.equal(err, null);
                assert.equal(typeof (result), "object");
                assert.equal(result !== null, true);
                // console.log(result); 

                done();
            })
        });
        it('findInMongoUnauthorized', function (done) {
            orderDao.findInMongo("", function (err, result) {
                assert.equal(err, null);
                assert.equal(typeof (result), "object");
                assert.equal(result !== null, true);
                //console.log(result); 

                done();
            })
        });
        it('findIdInMongo', function (done) {
            orderDao.findIdInMongo(findIdObject, function (err, result) {
                assert.equal(err, null);
                assert.equal(typeof (result), "object");
                assert.equal(result !== null, true);
                // console.log(result);
                assert.equal(result.a, "b");

                done();
            })
        });
        it('findIdInMongoUnauthorized', function (done) {
            orderDao.findIdInMongo("", function (err, result) {
                console.log(result);
                assert.notEqual(err, null);
                //  assert.equal(typeof(result),"object");
                //  assert.equal(result!==null,true) ;



                done();
            })
        });
        it('deleteFromMongo', function (done) {
            orderDao.deleteFromMongo(deleteObject, function (err, result) {
                assert.equal(err, null);
                assert.equal(typeof (result), "object");
                assert.equal(result !== null, true);
                // console.log(result);
                assert.equal(result.a, "b");

                done();
            })
        });
    });
