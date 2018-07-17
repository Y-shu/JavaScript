
window.alert("Fruit Seller");
let option =+prompt(`Enter Your Choice:
1.Apple
2.Orange
3.Papaya`);
switch(option)
{
  case 1:
  console.log("Apples Avaliable!");
  // let QuantityRequired;
  // let Quantity;
  // if(QuantityRequired<=Quantity)
  // {
  let fruit1=(FruitName,Quantity)=>{
  console.log("Basket is having",+Quantity+"Apples");
  let QuantityRequired = Number(prompt("How Many Apples You Want:"));
  console.log("You entered....:", +QuantityRequired+ "....Apples");
  let Avaliable=Quantity-QuantityRequired;
  console.log("Still...." +Avaliable+ "....apples are avaliable in the basket!");
  console.log("Thank You For Shopping with us!!Have a Good Day!!");
  return Avaliable;
}
//   else{
//   console.log("Sorry",+QuantityRequired+"is not avaliable!!");
// };
  fruit1("Apples",30);
  break;
  case 2:
  console.log("Oranges Avaliable!");
  let fruit2=(FruitName,Quantity)=>{
  console.log("Basket is having....",+Quantity+"....Oranges");
  let QuantityRequired = Number(prompt("How Many Oranges You Want:"));
  console.log("You entered....:", +QuantityRequired+ "....Oranges");
  let Avaliable=Quantity-QuantityRequired;
  console.log("Still...."+Avaliable+"....oranges are avaliable in the basket!");
  console.log("Thank You For Shopping with us!!Have a Good Day!!");

  return Avaliable;

};
  fruit2("Oranges",30);
  break;
  case 3:
  console.log("Papayas Avaliable!");
  let fruit3=(FruitName,Quantity)=>{
  console.log("Basket is having....",+Quantity+"....Papayas");
  let QuantityRequired = Number(prompt("How Many Papayas You Want:"));
  console.log("You entered....:", +QuantityRequired+ "....Papayas");
  let Avaliable=Quantity-QuantityRequired;
  console.log("Still...." +Avaliable+ "....papayas are avaliable in the basket!");
  console.log("Thank You For Shopping with us!!Have a Good Day!!");

  return Avaliable;

};
fruit3("Papayas",30);
break;

  default:
  console.log("Sorry! :( Fruit You Entered is Not Avaliable");

};
