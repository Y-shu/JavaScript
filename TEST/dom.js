window.onload=function() {

  var values = new Array(3);
  values[0] = [123.45, "apple", true];
  values[1] = [65, "banana", false];
  values[2] = [1034.99, "cherry", false];

  var mixed = document.getElementById("mixed");

  // IE 7 requires tbody
  var tbody = document.createElement("tbody");

  // for each outer array row
  for (var i = 0 ; i < values.length; i++) {
     var tr = document.createElement("tr");

     // for each inner array cell
     // create td then text, append
     for (var j = 0; j < values[i].length; j++) {
       var td = document.createElement("td");
       var txt = document.createTextNode(values[i][j]);
       td.appendChild(txt);
       tr.appendChild(td);
     }

     // attache event handler
     tr.onclick=prunerow;

     // append row to table
     tbody.appendChild(tr);
     mixed.appendChild(tbody);
   }
}

function prunerow() {
  var parent = this.parentNode;
  var oldrow = parent.removeChild(this);

  var datastring = "";
  for (var i = 0; i < oldrow.childNodes.length; i++) {
    var cell = oldrow.childNodes[i];
    datastring+=cell.firstChild.data + " ";
  }

  alert("removed " + datastring);
}
