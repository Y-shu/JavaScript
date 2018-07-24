let getDistinction = function(){
  return new Promise(function(resolve,reject){
    isStudy =true;
    if(isStudy){
      resolve(true);
    }else{
      reject(false);
    }
  });
}
let getJob = function(){
  return new Promise(function(resolve,reject){
    isJob = true;
    if(isJob){
      resolve(true);
    }else{
      reject(false);
    }
  });
}
let promisesToGetMarried = function(response){
  console.log(response);
  return new Promise(function(resolve,reject){
    if(response){
      resolve("Getting Married!!");
      console.log("Getting Married!!");

    }else{
      reject("Shame");
      console.log("No Marriage untill you get settled");
    }
  });
}
var promise=new Promise(function(resolve,reject){
  // reject()
  resolve()
});//call back
promise.then(getDistinction).then(getJob).then(function(response){
  console.log("You will get "+response);
}).catch(function(error){
  console.log("Rejection of"+error);
})
//when rejected we should use .catch(function(error){
//console.log(error);
// console.log(promise);


// getJob().then(function(result){
//   return promisesToGetMarried(result);
// }).catch(function(error){
//   console.log("Rejection for Marriage"+error);
// });
// promisesToGetMarried.then(function(response){
//   console.log("You will get"+response);
// }).catch(function(error){
//   console.log("Rejection of"+error);
// })
//
// getDistinction().then(function(result){
//   return promisesToGetMarried(result);
// }).catch(function(error){
//   console.log("Rejection for Marriage"+error);
// });
// promisesToGetMarried.then(function(response){
//   console.log("You will get"+response);
// }).catch(function(error){
//   console.log("Rejection of"+error);
// })
