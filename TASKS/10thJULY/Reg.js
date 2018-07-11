"use strict"
var value = +prompt(`Enter your option:
1.Registration
2.Login
3.Change Password`);
var j = 0;
var i = 0;
//var k=0;
const USERNAME="pinky";
const PWD=123456;
var user = [];
switch (value) {
  case 1:
    console.log("Registration");
    alert("Welcome to Registration Page");
    while (i <= 1) {
      var allowed;
      var Name = prompt("Enter your Name:");
      if (Name.length == 0 || Name.lengt <= 6 || Name.length > 15) {
        alert("User Id Should not be Empty/Length should be between 6 and 15");
      }
      // if(Name.length== 0 || Name.length>=6 && Name.length<15){
      //   alert(Name);
      // }else {
      //   alert("User Id Should not be Empty/Length should be between 6 and 15");
      // }

      //console.log("Name is:",Name);
      //console.log(typeof Name);
      //var allowed=(Name.length<=15)? allowed=true: allowed=false;
      // console.log("Name is:",Name);
      // console.log(typeof Name);
      // console.log(Name.length);

      var Age = Number(prompt("Enter your Age:"));
      var allowed = (Age >= 18) ? alert("Welcome to the facebook") : alert("Your age is not valid");
      // console.log("Age is :",Age);
      // console.log(typeof Age);

      var Email = prompt("Email");
      var allowed = (Email.length <= 25) ? alert("Email-id Verified") : alert("Please enter a valid Email-id");
      //console.log("Email is:",Email);
      //console.log(typeof Email);
      //console.log(Email.length);
      var Password = prompt("Password");
      var allowed = (Password.length <= 25) ? alert("Password Verified") : alert("Please enter a valid Password");
      //console.log("Password is:",Password);
      //console.log(typeof Password);
      //console.log(Password.length);
      user[i] = {
        name: Name,
        age: Age,
        email: Email,
        password: Password
      }
      i++;
    }

    for (j = 0; j < user.length; j++) {
      console.log(user[j]);
    }
    console.log("Registration done Sucessfully");

    //var UserLog[], user{};
    //UserLog.push(user);USERNAME
    break;
    case 2:
    alert("Welcome to Login Page");
    var Username = prompt("Enter your Username");
    var pwd=prompt("Enter your password");
      if(Username==USERNAME && pwd==PWD){
        console.log("log in Sucessfully");
      }else {
        console.log("Invalid Username and password");
      }
    break;
  case 3:
    console.log("Change Password");
    alert("Now you can change your password");
    var newpwd=prompt("Enter New password");
    console.log("Your new Password :" +newpwd);
    break;
  default:
    alert("Invalid option!");
}
