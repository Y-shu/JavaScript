let getDistinct = function(){
  return new Promise(function(resolve,reject){
    isStudy = false;
    if(isStudy){
      resolve(true);
    }else{
      reject(false);
    }
  });
}


let promisesToGiveBike = function(resp){
  console.log(resp);
  return new Promise(function(resolve,reject){
    if(resp){
      resolve("New Bike");
      console.log("New Bike");

    }else{
      reject("Shame");
      console.log("No Bike")
    }

  });
}
getDistinct().then(function(result){
  return promisesToGiveBike(result);
}).catch(function(error){
  console.log("Rejection of Bike"+error);
});

// new Promise(function(resolve,reject){
//   //logic to get distintion
//   let isDist =getDistinct();
//   if(isDist){
//     resolve("New Bike");
//   }else{
//     reject("Shame");
//   }
// });
promisesToGiveBike.then(function(response){
  console.log("Your Got"+response);
}).catch(function(error){
  console.log("Rejection of"+error);
})
