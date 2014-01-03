var assert = require("assert");
var orderDao = require("../dao/orderDao");
describe('test', function () {

    it('addToMongo', function (done) {
        orderDao.addToMongo({"a": "b"},function(err,result){ 
         assert.equal(err, null);
         assert.equal(typeof(result),"object");
         assert.equal(result!==null,true) ;
         assert.equal(result[0].a,"b");
        
         done();
    }) 
    });
    it('addToMongoUnauthorized', function (done) {
        orderDao.addToMongo("",function(err,result){ 
         assert.equal(err, null);
         assert.equal(typeof(result),"object");
         assert.equal(result!==null,true) ;        
        
         done();
    }) 
    });
   it('updateMongo', function (done) {
        orderDao.updateMongo({"a": "b"},function(err,result){ 
         assert.equal(err, null);
         assert.equal(typeof(result),"object");
         assert.equal(result!==null,true) ;
         assert.equal(result[0].a,"b");        
         done();
    }) 
    });
    it('updateMongoUnauthorized', function (done) {
        orderDao.updateMongo("",function(err,result){ 
         assert.equal(err, null);
         assert.equal(typeof(result),"object");
         assert.equal(result!==null,true);      
         done();
    }) 
    });
    it('findInMongo', function (done) {
        orderDao.findInMongo({"a": "b"},function(err,result){ 
         assert.equal(err, null);
         assert.equal(typeof(result),"object");
         assert.equal(result!==null,true);
           // console.log(result); 
        
         done();
    }) 
    });
    it('findInMongoUnauthorized', function (done) {
        orderDao.findInMongo("",function(err,result){ 
         assert.equal(err, null);
         assert.equal(typeof(result),"object");
         assert.equal(result!==null,true);
            //console.log(result); 
        
         done();
    }) 
    });
    it('findIdInMongo', function (done) {
        orderDao.findIdInMongo({"_id": "52c118742769edb30a000001"},function(err,result){
         assert.equal(err, null);
         assert.equal(typeof(result),"object");
         assert.equal(result!==null,true) ;
           // console.log(result);
         assert.equal(result.a,"b");
        
         done();
    }) 
    });
    it('findIdInMongoUnauthorized', function (done) {
        orderDao.findIdInMongo("",function(err,result){
         console.log(result);
            assert.equal(err, null);
       //  assert.equal(typeof(result),"object");
       //  assert.equal(result!==null,true) ;
            
        
        
         done();
    }) 
    });


})