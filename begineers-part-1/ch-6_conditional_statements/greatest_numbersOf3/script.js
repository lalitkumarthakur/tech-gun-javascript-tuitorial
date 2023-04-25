"use strict";

const a = prompt(`Enter the 1st number = `);
const b = prompt(`Enter the 2nd number = `);
const c = prompt(`Enter the 3rd number = `);

if (a > b) {
	console.log(`${a} is greater than ${b}`);
} else if (b > c) {
	console.log(`${b} is greater than ${c}`);
} else if (c > a) {
	console.log(`${c} is greater than ${a}`);
} else {
	alert("Invalid enter! Please try again later.");
}
