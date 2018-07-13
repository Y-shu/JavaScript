"use strict"
let user={
  name:"John",
  LastName:"Smith",
  Gender:'M',
  age:25,
  email:"Yashu",
  children:['Sam','Kit','Lem'],
};
//cloning object - cloning to different memory...
//let userObj={}; //creating empty object
let userObj={};
for (let key in user){
  userObj[key]=user[key];
}
console.log(user);
console.log(userObj);
userObj.address="Ameerpet";
