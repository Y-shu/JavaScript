// let x= function()
// {
//   console.log("I am Called from inside of a function");
// }
// let y= (callback)=>
// {
//   console.log("Do Something here");
// callback();
// }
// y(x); //function call

// ***********************************************************************8
let add = (a,b)=>{
  return a+b;
}
let sub = (a,b)=>{
  return a-b;
}
let mul = (a,b)=>{
  return a*b;
}
let div = (a,b)=>{
  return a/b;
}
let whatever = (a,b)=>{
  return "Implement This Function"
}
let calc = function(num1,num2,callback){
  if(typeof callback==='function')
  {
    return callback(num1,num2);

  }else {
    return("Third Param is not a function pass");
    }
  }

console.log(calc(2,3,add));
console.log(calc(2,3,sub));
console.log(calc(2,3,div));
console.log(calc(2,3,whatever));
console.log(calc(2,3,"whatever"));
