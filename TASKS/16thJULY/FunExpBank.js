"use strict"
let account = "22446688";
let total = 10000;
let withdraw = total - 1000;
let credit = 5000 + withdraw;

let name = function Name(firstname, lastname) {
  let nameIntro = "Welcome! ";

  let fullname = function Fullname() {
    return nameIntro + " " + firstname + " " + lastname + " " + ", Account Number :  " + account;
  }
  return fullname();

}

let totalamount = function Total(money) {

  let totalMoney = "Total Balance: ";

  let finaltotal = function finalTotal() {
    return totalMoney + " " + money + "-------> " + ", Remaining Balance: " + total;

  }
  return finaltotal();
}

let withdrawl = function Withdraw(amount) {
  let withdrawMoney = "Debited: ";

  let finalamount = function finalAmount() {
    return withdrawMoney + " " + amount + "------> " + ",After Debited: " + withdraw;
  }
  return finalamount();
}

let creditamount = function Credit(balance) {
  let creditMoney = "Credited: ";

  let finalbalance = function finalBalance() {

    return creditMoney + " " + balance + "------> " + ",After Credited: " + credit;
  }
  return finalbalance();
}

let data = name("Yashu", "Yarlagadda");
console.log(name);
console.log(data);
var data1 = totalamount(total);
console.log(totalamount);
console.log(data1);
var data2 = withdrawl(10000);
console.log(withdrawl);
console.log(data2);
console.log("Debited Sucessfully!!!");
var data3 = creditamount(5000);
console.log(creditamount);
console.log(data3);
console.log("Credited Sucessfully!!!");
console.log("Thank You for being a part of Us!!Have a Nice Day!");
