var count =0;
var ul = document.createElement('ul');
var Section = document.createElement('Section');
var div = document.createElement('div');

document.body.appendChild(Section);
document.body.appendChild(ul);
document.body.appendChild(div);

function addHeros(){
  var li = document.createElement('li');
  li.innerHTML="Hero"+count;
  ul.appendChild(li);
  count++;
}
function removeHero()
{
  // console.log(ul.lastChild);
  // console.log(ul.firstChild);
  // console.log(ul.nextSibling);
  // console.log(ul.previousSibling);
  // console.log(ul.parentNode);
  // console.log(ul.childNode);
  ul.lastChild.outerHTML = "";


}
