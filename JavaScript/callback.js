

function first(value,callback){
  callback(value*2,false);
  //20 will be sent to firstResult
  function second(value,callback){
      callback(value*2,false);

    function third(value,callback){
        callback(value*2,false);

    }
  }
}

first(10,function(firstResult,error){
  //callback of first function
  if(!error){
    console.log("value 1st:"+firstResult);
    second(firstResult,function(secondResult,error){
      if(!error){
        console.log("value 2st:"+secondResult);
        third(secondResult,function(thirdResult,error){
          if(!error){
            console.log("value 3st:"+thirdResult);
          }
        });
      }
    });
  }
});
