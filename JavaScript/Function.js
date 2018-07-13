// // function showMessage(){
// //   console.log("First Function");
// // }
// // showMessage();
// showMessage();
// function showMessage(x,y,z)
// {
//   console.log("First Function",x,y,z);
//   //invoking
// }
// showMessage(12,'Hi',true);//we should pass value or else it will be undefined...
// showMessage("12",10,'t');
// showMessage(12,'hi',true);
"use strict"
var John={
  name:'John',
  lastName:'Smith',
  yearOfBirth:1990,
  age:function (){
    var age = 2018-this.yearOfBirth;
    return age;
}

}
John.retirement=function yearUntilRetirement(){
  var userAge=John.age(year);
  var retirement=60-userAge;
  if(retirement>=0){
      console.log("Hi Your Name is: "+John.name+
      "and Your going to retire in : "+retirement+ "Years");

    }else{
      console.log("Your are Retired");
    }
    }
console.log(John.retirement())

// yearUntilRetirement('John',1990);
// yearUntilRetirement('Smith',2000);
// yearUntilRetirement('Rohn',1900);
//calculateAge(userAge);
// calculateAge();
// calculateAge(1991);
// calculateAge(1992);
