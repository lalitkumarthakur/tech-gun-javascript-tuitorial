"use strict";

// alert("Hello world!");

var name =
	"lalit"; /* var is used to declare variable called name but it is not longer used 
and not recommended methoud to declare
 variables */

var age = 24; /* var is used to declare variable called name but it is not longer used 
and not recommended methoud to declare
 variables */

const email =
	"reachkumarlalit89@gmail.com"; /* const is used to declare variable called email and it mostly used 
and recommended methoud to declare
 variables */

let password =
	"lalulija"; /* let is used to declare variable called password. It is only used when there is requirment
    of value of the variable to be changed in future used 
    and recommended methoud to declare
     variables */

alert("Welcome to JS Variables! ");
alert("Please open console to see results.");
console.log(
	`${name} is ${age} years old and his ${email} is and life password is ${password}`
);

password = prompt("Please enter your new password = ");
console.log("Lalit's new Password is = " + password);
