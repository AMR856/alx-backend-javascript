const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require('./1-calcul')

describe('Adding subing dividing function test', function() {
  it("Check basic without rouding", function() {
    expect(calculateNumber(1, 3, 'SUM')).to.equal(4); 
  });

  it("Check if b is rounded", function() {
    expect(calculateNumber(1, 3.7, 'SUM')).to.equal(5);
  });

  it('Check if a is rounded', function(){
    expect(calculateNumber(1.2, 4, 'SUM')).to.equal(5);
  });

  it('Check if both are rounded', function(){
    expect(calculateNumber(1.2, 3.7, 'SUM')).to.equal(5);
  });

  it('Check if one is zero', function(){
    expect(calculateNumber(0, 2, 'SUM')).to.equal(2);
  });

  it('Check if one is negative', function(){
    expect(calculateNumber(-1, 3, 'SUM')).to.equal(2);
  });

  it('Check if both are negative', function() {
    expect(calculateNumber(-2, -3, 'SUM')).to.equal(-5);
  });



  it("Check basic without rouding", function() {
    expect(calculateNumber(1, 3, 'SUBTRACT')).to.equal(-2);
  });

  it("Check if b is rounded", function() {
    expect(calculateNumber(3.7, 1, 'SUBTRACT')).to.equal(3);
  });

  it('Check if a is rounded', function(){
    expect(calculateNumber(4.2, 1, 'SUBTRACT')).to.equal(3);
  });

  it('Check if both are rounded', function(){
    expect(calculateNumber(1.2, 3.7, 'SUBTRACT')).to.equal(-3);
  });

  it('Check if one is zero', function(){
    expect(calculateNumber(0, 2, 'SUBTRACT')).to.equal(-2);
  });

  it('Check if one is negative', function(){
    expect(calculateNumber(-1, 3, 'SUBTRACT')).to.equal(-4);
  });

  it('Check if both are negative', function() {
    expect(calculateNumber(-2, -3, 'SUBTRACT')).to.equal(1);
  });



  it("Check basic without rouding", function() {
    expect(calculateNumber(1, 3, 'DIVIDE')).to.equal(0.3333333333333333);
  });

  it("Check if b is rounded", function() {
    expect(calculateNumber(3.7, 1, 'DIVIDE')).to.equal(4);
  });

  it('Check if a is rounded', function(){
    expect(calculateNumber(2.2, 1, 'DIVIDE')).to.equal(2);
  });

  it('Check if both are rounded', function(){
    expect(calculateNumber(1.2, 3.7, 'DIVIDE')).to.equal(0.25);
  });

  it('Check if one is zero', function(){
    expect(calculateNumber(0, 2, 'DIVIDE')).to.equal(0);
  });

  it('Check if one is negative', function(){
    expect(calculateNumber(-1, 3, 'DIVIDE')).to.equal(-0.3333333333333333);
  });

  it('Check if both are negative', function() {
    expect(calculateNumber(-2, -3, 'DIVIDE')).to.equal(0.6666666666666666);
  });

  it('Check if one is zero', function(){
    expect(calculateNumber(2, 0, 'DIVIDE')).to.equal('Error');
  });

  it('Check if one is negative', function(){
    expect(calculateNumber(-1, 0, 'DIVIDE')).to.equal('Error');
  });

  it('Check if both are negative', function() {
    expect(calculateNumber(-1, 0.4, 'DIVIDE')).to.equal('Error');
  });
});
