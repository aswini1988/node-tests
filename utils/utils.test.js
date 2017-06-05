const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
      // if(res !== 44){
      //   throw new Error(`Expected 44, but got ${res}.`);
      // }
    });
  });
  describe('#square', () => {
    it('should sqaure a number', () => {
      var res = utils.square(5);
      expect(res).toBe(25).toBeA('number');
      // if(res !== 25){
      //   throw new Error(`Expected 25, but got ${res}.`);;
      // }
    });
  });
  describe('#asyncadd', () => {
    it('should add two numbers asynchronously', (done) => {
      utils.asyncadd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      })
    });
  });

  describe('#asyncsquare', () => {
    it('should square two numbers asynchronously', (done) => {
      utils.asyncSquare(5, (res) => {
        expect(res).toBe(25).toBeA('number');
        done();
      });
    });
  });
});

it('should set first name and last name', () => {
  var user = {location: 'India', age:28};
  var res = utils.setName(user, "Rakesh Dean");
  expect(res).toInclude({
    firstName : 'Rakesh',
    lastName : 'Dean'
  })
});
