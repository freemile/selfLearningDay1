'use strict'


function SmartPhone(maker,year){
    this.year = year || "Unknown";
    this.maker = maker || "Unstated";
    this.Status= 'New';
    var self=this;
    
    if (this.maker==="Apple"){
        this.OS = "ios";
        this.battery ="In-built";
        this.hasBluetooth= false;
        this.Security="high";
        
    }
    else {
        this.OS = "Andriod";
        this.battery ="can be inbuilt or external";
        this.hasBluetooth= true;
        this.Security="low";
    }
    
    if((this.maker ==="Sony")&& (this.year>2014)){
        this.isWaterResistance = true;
    }
    
    else{
        this.isWaterResistance= false;
    }
    
    SmartPhone.prototype.use = function(){
           self.Status= "Used" ;
           return self;
        };
    
    SmartPhone.prototype.showStatus=function(){
        if(self.Status==="New"){
            
            return ("This phone is currently New");
        }
        else{
            return ("This Phone has been Used"); 
        }
    };
    
    SmartPhone.prototype.phoneInfo = function(){
           return {
               maker : self.maker,
               year :self.year,
               OS: self.OS,
               phoneStatus: self.Status,
               hasBlueTooth :self.hasBluetooth,
               Security: self.Security,
               waterResistance: self.isWaterResistance,
               Battery:self.battery
               
           };
        };

}

module.exports = SmartPhone;