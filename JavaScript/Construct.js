function Motor(name,type,engineCapacity,Wheels,company)
{
  this.name = name;  //mapping all the fields
  this.type = type;
  this.engineCapacity = engineCapacity;
  this.Wheels = Wheels;
  this.company = company;
}

var motor = new Motor('KTM 390','Sports',390,2,'ktm');
console.log(motor);
var motor2 = new Motor('Pulsar 150','Sports',150,2,'Bajaj');
console.log(motor2.name);
