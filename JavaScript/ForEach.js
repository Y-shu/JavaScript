// //range of value
//
// var arr= ['a',1,'b','12'];
// function showMsg(name,age){
//   alert("Hi TimeOut"+name+age);
// }
// //setTimeout(showMsg,1000*5,"John",23);  //setTimeout built-in function
// arr.forEach(function(elem,index){
//   setTimeout(index+"."+elem)
//   console.log(index+"."+elem);
// });
//
// var user= {
//   name:"Samual",
//   lastName:"Smith",
//   age:23
// }
// Object.keys(user).forEach((key)=>
// {
// console.log(key+":"+user[key]);
// })

var arr= ['a',1,'b','12'];
function showMsg(name,age){
    console.log("Hi TimeOut"+name+age);
}
let timerId=setTimeout(showMsg,1000*5,"John");
clearTimeout(timerId);
setInterval(showMsg,2000);
