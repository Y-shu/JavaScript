
/*switch(selection)
{
  case selection : //logic
  case selection : //logic
  case selection : //logic
  case selection : //logic
  case selection : //logic
  default : //logic
}*/
/*var num = +prompt("Enter a Number");
switch(num)
{
  case 3 :
  console.log("To small");
  break;
  case 10 : //logic
  console.log("Small Number");
  break;
  case 15 : //logic
  console.log("Large Number");
  break;
  case 20 : //logic
  console.log("Larger Number");
  break;
  case 25 : //logic
  console.log("Largest Number");
  break;
  default : //logic
  console.log("Number is not fit into range...");

}*/

var num1 = +prompt("Enter a Number");
var num2 = +prompt("Enter a Number"); //converting string in to number using + before prompt
var Operation = prompt(`Enter Operation :
+ for addition
-for substraction
* for multiplication
/ for Division`);


switch(Operation)
{
  case '+' :
  case 'Addition' :  // multiple cases same logic
  case 'Add' :
  alert("Addition :"+(+num1+num2));
  break;

  case '-' : //logic
  alert("Substraction :"+(+num1-num2));
  break;
  case '*' : //logic
  alert("multiplication :"+num1*num2);
  break;
  case '/' : //logic
  alert("Divison :"+num1/num2);
  break;

  default : //logic
  console.log("Operation is not fit into range...");

}
