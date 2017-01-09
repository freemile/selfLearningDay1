// testing code goes here

'use strict'

var myApp = require('../app/app.js');

describe("Data types tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return 'invalid input' for null", function() {
      expect(myApp.getPrimes(null)).toEqual('invalid input');
    });

    it("should return 'invalid' for undefined", function() {
      expect(myApp.getPrimes(undefined)).toEqual('invalid input');
    });

  });

  describe("Case for booleans", function() {

    it("should return 'invalid input' for `true`", function() {
      expect(myApp.getPrimes(true)).toBe('invalid input');
    });

  });

  describe("Case for Numbers", function() {

    it("should return '[2,3,5,7,11,13,17]' for 18", function() {
      expect(myApp.getPrimes(18)).toEqual([2,3,5,7,11,13,17]);
    });

    it("should return '[2,3,5,7,11,13,17]' for 4", function() {
      expect(myApp.getPrimes(4)).toEqual([2,3]);
    });

    it("should return '[2,3,5,7]' for 8", function() {
      expect(myApp.getPrimes(8)).toEqual([2,3,5,7]);
    });


  });

  describe("Case for Strings", function() {

    it("should return 'invalid input' for `tergiversate`", function() {
      expect(myApp.getPrimes('tergiversate')).toBe('invalid input');
    });

  });

  describe("Case for arrays", function() {

    it("should return `invalid input` for `[0, 1, 2]`", function() {
      expect(myApp.getPrimes([0, 1, 2])).toBe('invalid input');
    });

  });


  describe("Case for Prime numbers bellow 2 and for Negative integers", function() {

    it("should return `No prime numbers bellow the given input`", function() {
      expect(myApp.getPrimes(1)).toBe('No prime numbers bellow the given input');
    });
      
    it("should return `No prime numbers bellow the given input`", function() {
      expect(myApp.getPrimes(-2)).toBe('No prime numbers bellow the given input');
    });

  });
});
