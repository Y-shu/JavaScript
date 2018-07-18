let a = Number(prompt("Enter 1st number"));
let b = Number(prompt("Enter 2nd number"));


let add = (a,b)=>{
  return (alert(a + " + " + b + " = " + (a+b) ));
}
let sub = (a,b)=>{
  return (alert(a + " - " + b + " = " + (a-b) ));
}
let mul = (a,b)=>{
  return (alert(a + " * " + b + " = " + (a*b) ));
}
let div = (a,b)=>{
  return (alert(a + " / " + b + " = " + (a/b) ));
}
setTimeout(add , 2000 , a , b);
setTimeout(sub , 4000 , a , b);
setTimeout(mul , 6000 , a , b);
setTimeout(div , 8000 , a , b);
