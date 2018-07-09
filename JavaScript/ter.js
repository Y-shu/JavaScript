//let allowed ;

var age = prompt('Enter Your Age');
//if(age>18)
//{
//  allowed=true;
//}else
//{
//  allowed=false;
//}

//let allowed = consition ? value1: value2;
let allowed=(age<3) ? "Hi Baby.....Your are too Small..." :
(age<18)? "Welcome to teenager facebook" :
(age>=18)? "Welcome to the facebook":
"Your age is not valid";

//allowed store string type value here...
 //true : false;
console.log(allowed);
console.log(allowed.length); //length of string...
