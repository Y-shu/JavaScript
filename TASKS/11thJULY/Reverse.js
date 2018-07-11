"use strict"
var order=[1,2,3,4,5];
console.log("Ordered....");
console.log(order);
var reverse=function(array)
{
  var order=array
  var array2=[];
  for(var i=order.length-1;i>=0;i--)
  {
    array2.push(order[i])
  }
  return array2
  //console.log(array2);
}
reverse(order)
console.log("Reverse Order....");
console.log(reverse(order));
