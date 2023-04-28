"use strict";

// const a = prompt(`Enter the 1st number = `);
// const b = prompt(`Enter the 2nd number = `);
// const c = prompt(`Enter the 3rd number = `);

// if (a > b) {
// 	console.log(`${a} is greater than ${b}`);
// } else if (b > c) {
// 	console.log(`${b} is greater than ${c}`);
// } else if (c > a) {
// 	console.log(`${c} is greater than ${a}`);
// } else {
// 	alert("Invalid enter! Please try again later.");
// }

function biggest_number() {
	let fnumber = document.getElementById("fnumber").value;
	let snumber = document.getElementById("snumber").value;
	let tnumber = document.getElementById("tnumber").value;

	if (fnumber > snumber) {
		alert(`${fnumber} is greater than ${snumber}`);
	} else if (snumber > tnumber) {
		alert(`${snumber} is greater than ${tnumber}`);
	} else if (tnumber > fnumber) {
		alert(`${tnumber} is greater than ${fnumber}`);
	} else {
		alert("Invalid enter! Please try again later.");
	}

	document.getElementById("submit-btn").addEventListener("click", redirectFunction);

	function redirectFunction() {
		window.location.href = "../greatest_numbersOf3/result.html";
		// You can also use window.location.replace method

		/*
		 * window.location.replace("https://www.example.com");
		 */
	}
}
