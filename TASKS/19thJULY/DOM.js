console.log(document);
console.log(document.head);
console.log(document.body);

// var element1 = document.createElement('Section');
// function create(){
//   element1.innerHTML="<h1>Best-Films</h1>";
//   var element2 = document.createElement('p');
//   element2.innerHTML="<i>Welcome to this Page</i>";
//   element1.appendChild(element2)
//   document.body.appendChild(element1)
// }

var Table = document.getElementById('createTable');
function createTable(){
  var thead = document.getElementById("MyTable");
  var trow =thead.insertRow();
  var Cell1 =trow.insertCell();
  var Cell2 =trow.insertCell();
  var Cell3 =trow.insertCell();
  var Cell4 =trow.insertCell();
  var Cell5 =trow.insertCell();

  Cell1.innerText="Raja";
  Cell2.innerText="Kamalani Mukarji";
  Cell3.innerText="Anand";
  Cell4.innerText="Sarat";
  Cell5.innerText="Nalini";

  function addRow(){
    var heros=document.getElementById('heros').Value;
    var heroins=document.getElementById('heroins').Value;
    var film=document.getElementById('film').Value;
    var vilion=document.getElementById('vilion').Value;
    var vamp=document.getElementById('vamp').Value;
    var table=document.getElementById('createTable')[0];

    var newRow=table.insertRow(1);

    var cel = newRow.insertCell(0);
    var cel1=newRow.insertCell(1);
    var cel2= newRow.insertCell(2);
    var cel3= newRow.insertCell(3);
    var cel4= newRow.insertCell(4);

    cel.innerText=heros;
    cel1.innerText=heroins;
    cel2.innerText=film;
    cel3.innerText=vilion;
    cel4.innerText=vamp;
}
}
