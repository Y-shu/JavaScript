var user={
   name:"Yashu",
   bankName:"SBI",
   accountNumber:1234567890,
   branch:"Hitech-City"

}
try{
var choose=prompt("Welcome..!!\n Your option please?\n 1.Balance-Check \n 2.Deposit \n 3.WithDrawl \n 4. Account-Details");
var amount=10000,depositAmt,withDrawAmt;
switch (choose) {
  case '1': checkBalance();
            break;
  case '2': deposit();
            break;
  case '3': withDraw();
            break;
  case '4': accountDetails();
            break;
   default:  alert("Your Option is not Valid! Please enter a valid option!Thankyou!")
              break;
}
// balance checking
 function checkBalance(){
  alert("The total balance is:"+amount);
  checking();
}
// amount depositing
function deposit(){
depositAmt=prompt("Amount to be Deposited:");
  if(+depositAmt<0){
   throw "Not Allowed";
  }
else if(depositAmt>50000){
  throw  "Maximum deposited amount reached!"
}else{
      amount+=+depositAmt;
  alert("Deposited amount is:"+depositAmt);
  alert("Total balance is:"+amount);
checking();
}
}
// amount withdrawing
function withDraw(){
  withDrawAmt=prompt("Amount to be withDrawl");
if((withDrawAmt[0])=="-"){
   throw "Not Allowed"
}
  else if(withDrawAmt<=amount){
      amount-=+withDrawAmt;
      alert("Withdrawl amount is:"+withDrawAmt);
     alert("Remaining Balance is:"+amount);
      checking();
}else{
  throw ("Insufficeient Funds. Please maintain minimum balance");
  checking();
 }

}
// for user Details
function accountDetails(){
      alert("******User Details******* \n" + user.name+"\n" + user.bankName+"\n" + user.accountNumber+"\n" +  user.branch );
   checking();
}
function checking(){
var x=prompt("Do you wnt to continue type 'yes' otherwise you may exit")
if(x=="yes"){
  var choose=prompt("Choose which option do you want \n 1.CheckBalance \n 2.Deposit \n 3.WithDraw \n 4.AccountDetails");

  switch (choose) {
    case '1': checkBalance();
              break;
    case '2': deposit();
              break;
    case '3': withDraw();
              break;
    case '4': accountDetails();
              break;

  }
}else(
  alert("------>Thank You for Visiting Us!\nHave a nice day!<------")
)
}
}catch(error){
  alert(error);
  location.reload();
}
