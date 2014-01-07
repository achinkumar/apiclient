var assert = require("assert");
var orderDao = require("../dao/orderDao");
var config = require('../config');
var updateObject;
var deleteObject;
var findObject;
var findIdObject;
var findRandomKey = Math.random();
var findRandomValue = Math.random();
var deleteRandomValue = Math.random();
var deleteRandomKey = Math.random();

before(function () {
    
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
    });
    var findIdObjectJson = {
        "a": "b",
        findRandomKey: findRandomValue
    };

    orderDao.addToMongo(findIdObjectJson, function (err, result) {
        //console.log(result);
        findIdObject=result[0];
    });
    var deleteObjectJson = {
        "a": "b"
    };
    orderDao.addToMongo(deleteObjectJson, function (err, result) {        
        deleteObject = result[0];
        console.log("assign===="+result);
    });

});

describe('test', function () {

    it('addToMongo', function (done) {
        orderDao.addToMongo({
            "a": "bob"
        }, function (err, result) {
            assert.equal(err, null);
            assert.equal(typeof (result), "object");
            assert.equal(result !== null, true);
            assert.equal(result[0].a, "bob");

            done();
        })
    });
    it('updateMongo', function (done) {
        var updateData = {
            'a': 'job'
        }
        console.log('ud88'+updateObject);
        orderDao.updateMongo(updateObject._id, updateData, function (err, result) {
            assert.equal(err, null);
            assert.equal(typeof (result), "object");
            assert.equal(result !== null, true);
            assert.equal(result[0].a, "b");
            done();
        })
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

it('findIdInMongo', function (done) {
    orderDao.findIdInMongo(findIdObject, function (err, result) {
        assert.equal(err, null);
        assert.equal(typeof (result), "object");
        assert.equal(result !== null, false);
        // console.log(result);
        // assert.equal(result.a, "b");

        done();
    })
});

it('deleteFromMongo', function (done) {
    console.log('this is del--'+deleteObject);
    orderDao.deleteFromMongo(deleteObject, function (err, result) {
        assert.equal(err, null);
        assert.equal(typeof (result), "object");
        assert.equal(result !== null, true);
        // console.log(result);
        //assert.equal(result.a, "b");

        done();
    })
});

after(function (done) {
    config.dbc.collection(config.TABLE_PAYCART).remove({},function(){
    done();  })
})