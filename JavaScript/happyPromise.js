"use strict"
const isFatherHappy= true; //always happy so true
//promise-promise takes a function and funtion takes parameters
const willGetMobile=new Promise(function(resolve,reject){
  if(isFatherHappy){
    //phone object is create
    const phone={
      name:"1+6",
      brand:"1+",
      color:"black",
    }
    resolve(phone); //returning to then function
  }else {
    const reason = 'Father is not happy';
    reject(reason);
  }
})
const showOff = function(phone){
  const message = `Hey Friends I got New ' ${phone.name}the color is
  ${phone.color}`;
  return Promise.resolve(message)
}
//call promises
const askFather= function(){
  willGetMobile
  .then(showOff)
  .then((msg)=>console.log(msg))
  .catch((error)=>{console.log(error)});

};

askFather();
