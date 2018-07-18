var getName=function(value,name){
  if(value>0){
    console.log(value+" "+name);
    //value--;
    getName(value-1,name);
  }
}
getName(5,"Y-shu");
