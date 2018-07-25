// var user ={
//   name:"John",
//   age:20
// }
// try{
//   console.log("start!");
//   console.log(user.address);
// }catch(error){
//   console.log(error.name);
//   console.log(error.message);
//
// }finally{
//   console.log(user);
//   user=null;
// }
// //output is undefined which is value its not an error

var user ={
  name:"John",
  age:20,
  // address:"Ameerpet",
}
function userCall(){

  try{

    console.log("Inner Try");
    // data(); //this function is not defined so its an error
    if(user.address==undefined){
      // throw new Error("Address is not in user object")
      // throw new ReferrenceError("Address is not in user object")
      throw new syntaxError("Address is not in user object")


      //    {respose:false,
      //   message:"User Object dont content address",
      // data:user};
    }else{

      console.log(user.address);
      var user2={
        address:user.address,
      }
    }
  }catch(error){
    // console.log(error);
    // console.log(error.name);
    // console.log(error.message);
    // console.log(error.stack);
    if(error.name=="Error")
    {
      //logic resolved();
      console.log(error.name);
      console.log(error.message);
      console.log(error.stack);
    }else{
      throw error;
    }
  }finally{
    console.log(user);
    // user=null;
  }
}
try {
  console.log("OuterTry");
  userCall();
} catch (e) {
console.log("Outer catch");
//logic to resolve inner catch throw
console.log(e);
user.address="ammerpet";
userCall();
}
