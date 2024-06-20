const assert = require("assert");
const calculateNumber = require('./0-calcul')

describe('Add function test', function() {
  it("Check basic without rouding", function() {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it("Check if b is rounded", function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('Check if a is rounded', function(){
    assert.equal(calculateNumber(1.2, 4), 5);
  });

  it('Check if both are rounded', function(){
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('Check if one is zero', function(){
    assert.equal(calculateNumber(0, 2), 2);
  });

  it('Check if one is negative', function(){
    assert.equal(calculateNumber(-1, 3), 2);
  });

  it('Check if both are negative', function() {
    assert.equal(calculateNumber(-2, -3), -5);
  })
});
