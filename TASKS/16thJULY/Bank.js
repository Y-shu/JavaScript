
let account = "22446688";
let total =10000;
let withdraw=total-1000;
let credit = 5000+withdraw;
function Name(firstname,lastname) {
let nameIntro ="Welcome! ";
 function Fullname() {
  return nameIntro +" "+firstname+" "+lastname+" "+", Account Number :  "+ account ;
}
return Fullname();
}
function Total(money) {
let totalMoney = "Total Balance: ";
function finalTotal() {
  return totalMoney +" "+money +"-------> "+", Remaining Balance: "+ total;

}
return finalTotal();
}
function Withdraw(amount) {
let withdrawMoney = "Debited: ";
function finalAmount() {
  return withdrawMoney +" "+amount +"------> "+",After Debited: "+ withdraw;
}
return finalAmount();
}
function Credit(balance) {
  let creditMoney = "Credited: ";
  function finalBalance() {

    return creditMoney +" "+balance +"------> "+",After Credited: "+ credit;
  }
  return finalBalance();
}

let data = Name("Yashu","Yarlagadda");
console.log(data);
var data1 = Total(total);
console.log(data1);
var data2 = Withdraw(10000);
console.log(data2);
console.log("Debited Sucessfully!!!");
var data3 = Credit(5000);
console.log(data3);
console.log("Credited Sucessfully!!!");
console.log("Thank You for being a part of Us!!Have a Nice Day!");
