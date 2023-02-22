const assert = require('chai').assert;
const { generate } = require('../app');

const app = require('../app');

// result
generateListResult = app.generate();
sumOfArray = generateListResult.reduce((a, b) => a + b, 0);

describe('App',function(){

  describe('generate()', function(){
    it('generate should return list: [1,21,51,91,141]',function(){
      assert.deepEqual(generateListResult, [1,21,51,91,141]);
    });
    
    it('sum of elements in array should be above 100', function(){
      assert.isAbove(sumOfArray, 100);
    });

    it('sum of elements in array should be a number', function(){
      assert.typeOf(sumOfArray, 'number');
    });
  });

});



// PREVIOUS MOCHA AND CHAI TESTING w/ different functions


// const { sayHello, addNumbers } = require('../app');
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;

// const index = require('../src/pages/index');

// Results

// sayHelloResult = app.sayHello();
// addNumbersResult = app.addNumbers(5,5);

  // Mocha Initial Testing with Chai 

  // describe('sayHello()', function(){
  //   it('sayHello should return hello', function(){
  //     // let result = app.sayHello();
  //     assert.equal(sayHelloResult,'hello');
  //   });
  
  //   it('sayHello should return type string',function(){
  //     // let result = app.sayHello();
  //     assert.typeOf(sayHelloResult, 'string');
  //   });
  // });

  // describe('addNumbers()', function(){
  //   it('addNumbers should be above 5', function(){
  //     // let result = app.addNumbers(6,3);
  //     assert.isAbove(addNumbersResult, 5);
  //   });
  
  //   it('addNumbers should return type number',function(){
  //     // let result = app.addNumbers();
  //     assert.typeOf(addNumbersResult, 'number');
  //   });
  // });