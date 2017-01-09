// testing code goes here

(function(){
 'use strict';

  var SmartPhone = require('../app/app.js');

  describe("SmartPhone Class: Create a SmartPhone, make it usable and Return all information about itself", function() {

    it("The phone should be a type of `object`, and an instance of the `SmartPhone` class", function() {
      var Apple = new SmartPhone('Apple');
      expect(typeof Apple).toEqual(typeof {});
      expect(Apple instanceof SmartPhone).toBeTruthy();
    });

    it("The Phone maker should be 'Unstated' and year should be 'UnKnown' if no parameter is passed", function() {
      var phone = new SmartPhone();
      expect(phone.year).toBe('Unknown');
      expect(phone.maker).toBe('Unstated');
    });

    it("The phone maker and year should be a property of the phone", function() {
      var Samsung  = new SmartPhone('Samsung', 2016);
      expect(Samsung.maker).toBe('Samsung');
      expect(Samsung.year).toBe(2016);
    });

    it("The phone security should be 'high' and have 'ios' Operating system for Apple phones ", function() {
      var Apple  = new SmartPhone('Apple');
      expect(Apple.Security).toEqual('high');
      expect(Apple.OS).toEqual('ios');
    });
      
    it("The phone security should be 'low' and have 'Andriod' Operating system if the stated maker is not Apple ", function() {
      var Sony  = new SmartPhone('Sony');
      expect(Sony.Security).toEqual('low');
      expect(Sony.OS).toEqual('Andriod');
    });
      
     it("The Phone should be 'Water resistant' if it is 'Sony' and year is greater than '2014'", function() {
      var Sony  = new SmartPhone('Sony',2015);
      expect(Sony.isWaterResistance).toEqual(true);
    
      var Sony  = new SmartPhone('Sony',2010);
      expect(Sony.isWaterResistance).toEqual(false);
    });

    it("The Phone should not have 'bluetooth' but have 'In-built' battery for Apple phones ", function() {
      var Apple  = new SmartPhone('Apple');
      expect(Apple.hasBluetooth).toEqual(false);
      expect(Apple.battery).toEqual("In-built");
    });
      
     it("The Phone should have 'bluetooth' and Battery 'can be inbuilt or external'for Andriod phones ", function() {
      var LG  = new SmartPhone('LG');
      expect(LG.hasBluetooth).toEqual(true);
      expect(LG.battery).toEqual("can be inbuilt or external");
    });

    it("The phone should return an 'Object' containing all information about it if the phoneInfo method is invoked", function() {
      var Sony = new SmartPhone('Sony', 2015);
      expect(Sony.phoneInfo()).toEqual({
          "maker":"Sony", "year":2015,
          "OS":"Andriod", "phoneStatus":"New",
          "hasBlueTooth":true, "Security":"low", 
          "waterResistance":true,"Battery":"can be inbuilt or external"});
    });

    it("The Phone Status should return 'Used' after it has been used", function() {
      var Nokia  = new SmartPhone();
      expect(Nokia.Status).toEqual('New');
      Nokia.use();
      expect(Nokia.Status).toEqual('Used');
    });

  });
})();
