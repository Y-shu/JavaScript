let names = ['John','Sam','Ram','Rohn'];
let John = ['John','Samith',25,true,250000.23,null,names];//we can add array inside an array
let rohn = [John,names];
console.log(John);
console.log(typeof John);
John[3] = false; //directly replacing...
console.log(John);
John.push("Blue"); //method to add element at the end
John.unshift("Mr."); //method to add element at the begining
// John.pop();// Method to remove element from the last
// John.shift();// Method to remove element from the begining
console.log(John);
console.log(John.indexOf('Samith')); // method returens either 1 or -1

//console.log("Name :"+John[0]);
//console.log("Salary :"+John[4]);
//for(let index=0;index<John.length;index++)
//console.log(John[5][2])
// for(let index=0;index<rohn.length;index++)
// {
//   console.log(John[index]);
for(let nIndex=0;nIndex<rohn[index].length;nIndex++)
   {
     console.log(rohn[index][nIndex]);
 }
// //counter-for execute till particular count
