'use strict'

var file = {}
file.getPrimes =  function(n) {
    var output = []; 
    
    //should return 'invalid iput' if the input any datatype order than number
    if (typeof(n)!== "number"){
        return "invalid input"
    }
    //should return 'No prime numbers bellow the given input'for input less than 2
    else if((n<0) || (n<2)){
        return "No prime numbers bellow the given input"
    }
    
    else{
// implementation of prime number using trial division method with asyntothic analysis of order 'n*Math.sqrt(n)'
          for(var i = 2; i<=n;i++){
              var isPrime = true;
              
              //check if the argument is divisible by numbers between 2 and its square root
             for(var j = 2; j <= (Math.sqrt(i)); j++){
               if (i % j==0){
                 isPrime=false;
                   
                //should break the loop if isPrime =false for better optimization 
                 break;
               }
             }
              // push the number that pass the test into an array
             if(isPrime == true){
               output.push(i);
            }
                
           }
        }
        return output;
      }

module.exports = file;