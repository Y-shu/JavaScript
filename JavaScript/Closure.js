let hobby = "Dance"; //variable
function showName(firstName,lastName)
{
  let nameIntro = "Your Name is:";
  function makeFullName()
  {
    return nameIntro + ""+firstName+""+lastName + "Your Hobby is"+hobby;
  }
  return makeFullName();

}
let data = showName("Michael","Jackson");
console.log(data);
