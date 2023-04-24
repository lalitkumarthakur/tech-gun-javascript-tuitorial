"use strict";

// alert("Hello world!");
// Datatypes in JS
// Datatypes is javascript is Dynamic not static unlike Java so a variable can be initialized as integer but can be changed to string later on.
let x = 10;
console.log(`Value of ${x}`);
x = "Shyam";
console.log(`New Value of ${x}`);

// Integer Datatype
let a = 12;
console.log(`The Value of a is ${a} which is Integer Datatype`);

// String Datatype
let name = "Raju";
console.log(`The Value of name is ${name} which is String Datatype`);

// Boolean Datatype
let greater = 3 > 1;
console.log(`3 is grater than 1 which is ${greater}`);

// Array Datatype
let ax = ["riju", 12, 13, "shayan"];
console.log(`The Value of ax is ${ax} which is Array Datatype`);

// Object Datatype
let obj = {
	parts: "true",
	ventilator: 1,
};

let ac = JSON.stringify(obj);
console.log(`The Value of ac is ${ac} which is Object Datatype`);

// Undefined Datatype
let na;
console.log(`The Value of na is ${na} which is Undefined Datatype`);

//typeof operator -> this operater is used to check the datatype of any variable. check example below ->

const mom = "humble";
alert(`Data type of mom variable is ${typeof mom}`);

if (typeof mom === "string") {
	// === checks the datatype but == does not so here === is used to check the datatype and !== avoid to check datatype
	// and ! operator reverses the value means if true then it will be false.
	console.log("Hoo");
} else {
	console.log(" it's not valid");
}
