var season = prompt("Enter Month")
switch(true)
{
  case(season>0 && season<4):
  alert("Summer");
  break;
  case(season>5 && season<8):
  alert("Winter");
  break;
  case(season>9 && season<12):
  alert("Rainy");
  break;
  default:
  console.log("Not a valid month.....");
}
