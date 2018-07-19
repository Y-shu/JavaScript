
/*garbage collection occurs when an object is unrechable
mark and swap algorithm resloves this issue
*/
function garb(){
  var first = {};
   /*two objects are created and reference one another, thus creating a cycle*/
  var sec = {};
  /*They will go out of scope after the function call, so they are effectively useless and could be freed
  */
  first.a = sec; //first is references to sec
  sec.a = first;// sec is references to first
  return "Hello";
  /*However, the reference-counting algorithm considers that since each of the two
  objects is referenced at least once, neither can be garbage-collected.
  */
}
console.log(garb());
