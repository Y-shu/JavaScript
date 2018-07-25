//json is a text or string
//key-value here key is string
try {
 var employee1 =`{
   "empId":01,
   "name":"John",
   "depart":"Developement",
   "Salary":20000,
   "team":["A","B","C"],
   "code":{
     "color":["#fff00","#00ff00",]
   }
 }`
//alert(employee)
 var employee = JSON.parse(employee1);//string into value
 var section=document.createElement('Section');
 var h1=document.createElement('h1');
 var h2=document.createElement('h2');
 var h3=document.createElement('h3');
 // document.createElement('h4');
 h1.innerText=employee.empId+" . "+employee.name;
 h1.innerText=employee.depart+" . "+employee.salary;
 h1.innerText=employee.team[0]+" . "+employee.code.color[0];
 h1.innerText+=employee.team[0]+" . "+employee.code.color[1];
 h1.innerText+=employee.team[0]+" . "+employee.code.color[2];


 section.appendChild(h1);
 section.appendChild(h2);
 section.appendChild(h3);

 document.body.appendChild(section)
 // alert(JSON.stringify(employee));
} catch (error) {
console.log(error);
}
