const assert = require("assert");
const calculateNumber = require('./1-calcul')

describe('Adding subing dividing function test', function() {
  it("Check basic without rouding", function() {
    assert.equal(calculateNumber(1, 3, 'SUM'), 4);
  });

  it("Check if b is rounded", function() {
    assert.equal(calculateNumber(1, 3.7, 'SUM'), 5);
  });

  it('Check if a is rounded', function(){
    assert.equal(calculateNumber(1.2, 4, 'SUM'), 5);
  });

  it('Check if both are rounded', function(){
    assert.equal(calculateNumber(1.2, 3.7, 'SUM'), 5);
  });

  it('Check if one is zero', function(){
    assert.equal(calculateNumber(0, 2, 'SUM'), 2);
  });

  it('Check if one is negative', function(){
    assert.equal(calculateNumber(-1, 3, 'SUM'), 2);
  });

  it('Check if both are negative', function() {
    assert.equal(calculateNumber(-2, -3, 'SUM'), -5);
  });



  it("Check basic without rouding", function() {
    assert.equal(calculateNumber(1, 3, 'SUBTRACT'), -2);
  });

  it("Check if b is rounded", function() {
    assert.equal(calculateNumber(3.7, 1, 'SUBTRACT'), 3);
  });

  it('Check if a is rounded', function(){
    assert.equal(calculateNumber(4, 1, 'SUBTRACT'), 3);
  });

  it('Check if both are rounded', function(){
    assert.equal(calculateNumber(1.2, 3.7, 'SUBTRACT'), -3);
  });

  it('Check if one is zero', function(){
    assert.equal(calculateNumber(0, 2, 'SUBTRACT'), -2);
  });

  it('Check if one is negative', function(){
    assert.equal(calculateNumber(-1, 3, 'SUBTRACT'), -4);
  });

  it('Check if both are negative', function() {
    assert.equal(calculateNumber(-2, -3, 'SUBTRACT'), 1);
  });



  it("Check basic without rouding", function() {
    assert.equal(calculateNumber(1, 3, 'SUBTRACT'), -2);
  });

  it("Check if b is rounded", function() {
    assert.equal(calculateNumber(3.7, 1, 'SUBTRACT'), 3);
  });

  it('Check if a is rounded', function(){
    assert.equal(calculateNumber(4, 1, 'SUBTRACT'), 3);
  });

  it('Check if both are rounded', function(){
    assert.equal(calculateNumber(1.2, 3.7, 'SUBTRACT'), -3);
  });

  it('Check if one is zero', function(){
    assert.equal(calculateNumber(0, 2, 'SUBTRACT'), -2);
  });

  it('Check if one is negative', function(){
    assert.equal(calculateNumber(-1, 3, 'SUBTRACT'), -4);
  });

  it('Check if both are negative', function() {
    assert.equal(calculateNumber(-2, -3, 'SUBTRACT'), 1);
  });

  it("Check basic without rouding", function() {
    assert.equal(calculateNumber(1, 3, 'SUBTRACT'), -2);
  });

  it("Check if b is rounded", function() {
    assert.equal(calculateNumber(3.7, 1, 'SUBTRACT'), 3);
  });

  it('Check if a is rounded', function(){
    assert.equal(calculateNumber(4, 1, 'SUBTRACT'), 3);
  });

  it('Check if both are rounded', function(){
    assert.equal(calculateNumber(1.2, 3.7, 'SUBTRACT'), -3);
  });

  it('Check if one is zero', function(){
    assert.equal(calculateNumber(0, 2, 'SUBTRACT'), -2);
  });

  it('Check if one is negative', function(){
    assert.equal(calculateNumber(-1, 3, 'SUBTRACT'), -4);
  });

  it('Check if both are negative', function() {
    assert.equal(calculateNumber(-2, -3, 'SUBTRACT'), 1);
  });



  it("Check basic without rouding", function() {
    assert.equal(calculateNumber(1, 3, 'DIVIDE'), 0.3333333333333333);
  });

  it("Check if b is rounded", function() {
    assert.equal(calculateNumber(3.7, 1, 'DIVIDE'), 4);
  });

  it('Check if a is rounded', function(){
    assert.equal(calculateNumber(2, 1, 'DIVIDE'), 2);
  });

  it('Check if both are rounded', function(){
    assert.equal(calculateNumber(1.2, 3.7, 'DIVIDE'), 0.25);
  });

  it('Check if one is zero', function(){
    assert.equal(calculateNumber(0, 2, 'DIVIDE'), 0);
  });

  it('Check if one is negative', function(){
    assert.equal(calculateNumber(-1, 3, 'DIVIDE'), -0.3333333333333333);
  });

  it('Check if both are negative', function() {
    assert.equal(calculateNumber(-2, -3, 'DIVIDE'), 0.6666666666666666);
  });

  it('Check if one is zero', function(){
    assert.equal(calculateNumber(2, 0, 'DIVIDE'), "Error");
  });

  it('Check if one is negative', function(){
    assert.equal(calculateNumber(-1, 0, 'DIVIDE'), 'Error');
  });

  it('Check if both are negative', function() {
    assert.equal(calculateNumber(-1, 0.4, 'DIVIDE'), 'Error');
  });
});
