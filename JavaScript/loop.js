//while(condition){
  //logic
//}
let count = 0;


/*while(count <=10){
  //logic
  console.log(count);
  count++;
}*/

/*let count = 0;
do{
  //logic
  console.log(count);
  count++;
}while(count <=10 || count >=4);*/

/*while(true){
  //logic //Infinity loop
  console.log(count);
}*/

/*for(initilization; condition;counter/step)
{

}*/
/*for (; count<=5;)
{

  if(count == 3){ //terminating it stops the loop at count 3
    break;
  }
  console.log("Number:"+count);
  count++;
}
  console.log("Continue");*/

for (; count<=100;count+=1)
{

  if(!(count%2))
  { // skip iteration at count 3
    continue;
  }
  console.log("Number:"+count);

}
  console.log("Continue");
