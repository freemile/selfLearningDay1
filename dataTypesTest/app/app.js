'use strict'

var file = {}
file.dataTypes =  function (input){
 

  //Testing if input is a string
  
  if (typeof(input)==="string"){
    return input.length;
  }
  
  // This line tests if input is 'null' or input is 'undefined'
  else if ((input=== null) ||(input=== undefined) ){
    return "no value";
  }
  
  
  //Testing if input is an array
  else if(typeof(input)==='object'){ 
      
   // should return undefined for an array without the 3rd index   
      if(input.length<3){
        return undefined;
      }
      
   //should return the 3rd index for array whose length is greater or equal to 3    
      else if (input.length >= 3){ 
        return input[2];

      }


  }
  //Testing if input is a a boolean
  else if (typeof(input)==="boolean"){
    return input;
  }
    
  //Testing if input is less than 100
  else if(typeof(input)==="number"){ 
      if (input< 100){ 
        return "less than 100";
      }
      //Testing if input is greater than 100
      else if (input > 100){ 
        return "more than 100";
      }
      else if (input === 100){ 
        return "equal to 100";
      }
  }
    
    //return the result of invoking the function
  if(typeof(input)==='function'){
    return input(true);
  }

}
module.exports = file;