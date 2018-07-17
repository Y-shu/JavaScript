var objArr=[{
  num:5,
  name:'Apple'
},{
  num:20,
  name:'Banana'
},{
  num:15,
  name:'cabage'

},{
  num:12,
  name:'orange'
}];
objArr.sort(function (val1,val2){
if(val1.name>val2.name){
  return -1;
}else{
  return 1;
}
});
console.log(objArr);
