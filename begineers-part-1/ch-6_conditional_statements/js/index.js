"use strict";

// alert("Hello world!");
// Conditional Statements in JS
const age = prompt(`Please Enter Your Age`);
const hasCard = prompt(
	`Do you have Voter ID Card? (Pleaseenter Yes/yes/Y/y or No/no/N/n)`
);

if (age >= 18 && hasCard === "Yes/yes/Y/y") {
	alert(`You are eligible to vote`);
} else if (age >= 18 && hasCard === "No/no/N/n") {
	alert(`You are not eligible to vote`);
} else if (age <= 0) {
	alert(`Invalid entry. Age cannot be less than 0. Please try again later !`);
} else {
	alert(`You are not eligible to vote`);
}

// Nulish operator ?? is such a operator when a condition fails and a variable is undefined the it provides an option to print
// something instaed of retuening undefined variable output. check the example below ->

let cd = 12;
alert(cd ?? "14");

/* Switch Case
in Javascript  */

// switch case uses only === so == will not work.

// write a progrm to enter any day (monday, friday, etc) and print it.

const day = prompt("Please enter any day (from Monday to Sunday) = ");

switch (day) {
	case "Monday":
		alert("Today is Monday !");
		break;

	case "Tuesday":
		alert("Today is Tuesday !");
		break;

	case "Wednesday":
		alert("Today is Wednesday !");
		break;

	case "Thursday":
		alert("Today is Thursday !");
		break;

	case "Friday":
		alert("Today is Friday !");
		break;

	case "Saturday":
		alert("Today is Saturday !");
		break;

	case "Sunday":
		alert("Today is Sunday !");
		break;

	default:
		alert("Invalid Day Format! Please try again....");
}
