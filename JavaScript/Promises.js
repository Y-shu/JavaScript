"use strict"
var promise=new Promise(function(resolve,reject){
  resolve(2) //u can use reject also reject(2)
});//call back
promise.then(first).then(second).then(third).then(function(response){
  console.log(response);
})//pipe lining - then

//when rejected we should use .catch(function(error){
//console.log(error);
console.log(promise);
})



function first(value){
  return value*2;
  //20 will be sent to firstResult
  function second(value,callback){
    return value*2;


    function third(value,callback){
      return value*2;
       }
  }
}
