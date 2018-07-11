"use strict"
var allowed;
var Name = prompt("Enter your Name:");
console.log("Name is:",Name);
console.log(typeof Name);
var allowed=(Name.length<=15)? allowed=true: allowed=false;
// if(Name.length<=15)
// {
//  allowed=true;
// }else
// {
//  allowed=false;
// }
console.log(allowed);
console.log(Name.length);

var Age  = Number(prompt("Enter your Age:"));
console.log("Age is :",Age);
console.log(typeof Age);
//var allowed=(Age.length==null)? "Age cannot be empty":
// if(Age.length==null)
// {
//   console.log("Age field cannot be empty!!!")
// }
var allowed= (Age.lengthAge<18) ? "Hi Dear.....Your are too Young..." :(Age>=18)? "Welcome to the facebook":"Your age is not valid";
console.log(allowed);
console.log(allowed.length);


var Email= prompt("Email");
console.log("Email is:",Email);
console.log(typeof Email);
var allowed=(Email.length<=25)? allowed=true: allowed=false;
// if(Email.length<=25)
// {
//  allowed=true;
// }else
// {
//  allowed=false;
// }
console.log(allowed);
console.log(Email.length);

var Password = prompt("Password");
console.log("Password is:",Password);
console.log(typeof Password);
var allowed=(Password.length<=25)? allowed=true: allowed=false;
// if(Password.Length<25)
// {
//   allowed=true;
// }else {
//   allowed=false;
// }
console.log(allowed);
console.log(Password.length);
