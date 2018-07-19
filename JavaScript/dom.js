console.log(document);
console.log(document.head);
console.log(document.body);
/*click-button*/
var elem=document.createElement('Section');
function create(){
  elem.outerHTML="<h1>This is section Text</h1>";
  var pelem =document.createElement('p');
  pelem.innerText=="This is paragraph text";
  elem.appendChild(pelem)
  document.body.appendChild(elem)
}

function replace(){
  elem.innerHTML="<h1>This is section Text</h1>";
  var pelem =document.createElement('p');
  pelem.innerText=="This is paragraph text";
  elem.appendChild(pelem)
  document.body.appendChild(elem)
}

//remove Element
function remove(){
  // elem.innerHTML="";
  elem.outerHTML="";
  // var pelem =document.createElement('p');
  // pelem.innerText=="This is paragraph text";
  // elem.appendChild(pelem)
  // document.body.appendChild(elem)
}

// //console.log(window.document);
// /*Adding element to the
// DOM*/
// /*add ing this to child of another element*/
// var elem=document.createElement('Section'); //section- tag name
//
// elem.innerHTML = "<h1>This is section Text </h1>";/* point the inner element(innerHTML-write a
//    text or fetching text)*/
// /*add child as nested element*/
// var pelem =document.createElement('p');
// pelem.innerText=="This is paragraph text";
// elem.appendChild(pelem)
// document.body.appendChild(elem)
//
