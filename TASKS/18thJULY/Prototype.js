/*Human constructor*/
function Human(firstName, lastName) {
	this.firstName =firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}

/*Creating two objects Person1 and Person2 with Human constructor function*/
var person1 = new Human("Virat", "Kohli");
var person2 = new Human("Sachin", "Tendulkar");
console.log(person1);
console.log(person2);
/*On executing the above code JavaScript engine will create
two copy of constructor function each for person1 and person2.*/

/*every object created using the constructor function will have
it’s own copy of properties and methods. It doesn’t make sense to
 have two instances of function fullName that do the same thing. Storing
separate instances of function for each objects results into wastage of memory.
*/

/*When a function is created in JavaScript, JavaScript engine adds a prototype
property to the function. This prototype property is an object (called as prototype
object) has a constructor property by default. constructor property points back to
the function on which prototype object is a property. We can access the function’s
prototype property using the syntax functionName.prototype.
*/
function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}
//console.log(Human);
/*To access prototype property of the Human constructor*/
console.log(Human.prototype);
/*New property can be added to the constructor function’s prototype
 property using either the dot notation or square bracket notation */
//Dot notation
Human.prototype.name = "Ashwin";
console.log(Human.prototype.name)

//Square bracket notation
Human.prototype["age"] = 26;
console.log(Human.prototype["age"]); 
console.log(Human.prototype);
