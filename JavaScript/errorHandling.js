// try{ //first executed
//   //logic
//   alert('Start of program!!' );
//   agftsygj
//   //try block is to handle error with some logic
// }catch(error){ //second executed
//   alert('Error of the Program');
// }
// alert('End of program!');

try{ //first executed
  //logic
  alert('Start of program!!' );
  agftsygj
  //try block is to handle error with some logic
}catch(error){ //second executed
  //catching error and displays message
  alert('Error of the Program');
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);

}finally{
  //always execute even you are having an err at a particular point in code
  alert("This is always execute");
}
alert('End of program!');
