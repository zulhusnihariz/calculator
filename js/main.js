/* -------------------------------------------------------------------------- */
/*                        Declare element tag as variables                    */
/* -------------------------------------------------------------------------- */
const operation = document.querySelector("#operation");
const answer = document.querySelector("#answer");
const equalSign = document.querySelector("#equal-sign");

const clear = document.getElementById("CE");
const undo = document.getElementById("undo");
const ans = document.getElementById("ans");
const equal = document.getElementById("=");
const period = document.getElementById(".");
const add = document.getElementById("+");
const substract = document.getElementById("-");
const multiply = document.getElementById("*");
const divide = document.getElementById("/");
const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

/* -------------------------------------------------------------------------- */
/*                   Clear screen and when "CE" button is pressed             */
/* -------------------------------------------------------------------------- */
function clearScreen() {
	operation.textContent = "";
	answer.textContent = "";
	equalSign.textContent = "";
}

/* -------------------------------------------------------------------------- */
/*             Function to display number when a button is pressed            */
/* -------------------------------------------------------------------------- */

function displayNumber(anyNumber) {
	operation.style.visibility == "hidden"
		? (operation.style.visibility = "visible")
		: (operation.style.visibility = "visible");

	if (operation != undefined) {
		operation.textContent += anyNumber;
	} else {
		operation.textContent = anyNumber;
	}
}

/* -------------------------------------------------------------------------- */
/*               Function to display "."; if exists, do nothing               */
/* -------------------------------------------------------------------------- */

let count = 0;
function pressDecimal() {
	currentDisplay = operation.textContent;

	lastDot = currentDisplay[currentDisplay.length - 1];
	if (lastDot == "." || count > 0) {
		return;
	} else {
		displayNumber(".");
		count++;
		console.log(count);
	}
}

function resetCount() {
	count = 0;
	return count;
}

/* -------------------------------------------------------------------------- */
/*                     Function for equal and undo button                     */
/* -------------------------------------------------------------------------- */

function pressEqual() {
	if (operation.textContent != "") {
		calculate();

		operation.textContent = "";
		operation.style.visibility = "hidden";

		if (answer.textContent == "") {
			return;
		} else {
			equalSign.textContent = "=";
		}
		// displayAnswer();
	}
}

function pressUndo() {
	let currentDisplay = operation.textContent;
	currentDisplay = currentDisplay.slice(0, -1);
	operation.textContent = currentDisplay;
}

/* -------------------------------------------------------------------------- */
/*                                 Operations                                 */
/* -------------------------------------------------------------------------- */

function addition(...anyNumber) {
	let sum = parseFloat(anyNumber[0]);

	for (i = 1; i < anyNumber.length; i++) {
		sum += parseFloat(anyNumber[i]);
		console.log(sum);
	}

	if (isNaN(sum)) {
		return (answer.textContent = "error");
	}
	return sum;
}

function substraction(...anyNumber) {
	let sum = parseFloat(anyNumber[0]);
	for (i = 1; i < anyNumber.length; i++) {
		sum -= parseFloat(anyNumber[i]);
	}

	if (isNaN(sum)) {
		return (answer.textContent = "error");
	}

	return sum;
}

function multiplication(...anyNumber) {
	let sum = parseFloat(anyNumber[0]);
	for (i = 1; i < anyNumber.length; i++) {
		sum *= parseFloat(anyNumber[i]);
	}

	if (isNaN(sum)) {
		return (answer.textContent = "error");
	}
	return sum;
}

function division(...anyNumber) {
	let sum = parseFloat(anyNumber[0]);
	for (i = 1; i < anyNumber.length; i++) {
		sum /= parseFloat(anyNumber[i]);
	}

	if (isNaN(sum)) {
		return (answer.textContent = "error");
	}

	if (sum == Infinity) {
		return "undefined";
	} else {
		return sum.toFixed(5);
	}
}

/* -------------------------------------------------------------------------- */
/*                        Calculate numbers on display                        */
/* -------------------------------------------------------------------------- */

function calculate() {
	numberGiven = operation.textContent;

	if (numberGiven.includes("+")) {
		// addition if plus sign exist
		numberGiven = numberGiven.split("+");

		answer.textContent = addition(...numberGiven);
	} else if (numberGiven.includes("*")) {
		// multiply if star sign exist
		numberGiven = numberGiven.split("*");
		console.log(numberGiven);

		answer.textContent = multiplication(...numberGiven);
	} else if (numberGiven.includes("/")) {
		// division if divide sign exist
		numberGiven = numberGiven.split("/");
		console.log(numberGiven);

		answer.textContent = division(...numberGiven);
	} else if (numberGiven.includes("-")) {
		// substract if minus sign exist

		if (numberGiven[0] == "-") {
			numberGiven = numberGiven.split("-");
			numberGiven[0] = "0";
			console.log(numberGiven);
			answer.textContent = substraction(...numberGiven);
		} else {
			numberGiven = numberGiven.split("-");
			answer.textContent = substraction(...numberGiven);
		}
	}
}

function checkOperator(op) {
	let conditions = ["+", "-", "*", "/"];
	let conditions2 = ["+", "*", "/"];

	numberGiven = operation.textContent;

	lastChar = numberGiven.slice(-1);
	firstChar = numberGiven.slice(0);

	if (
		conditions2.some(el => firstChar.includes(el)) ||
		conditions.some(el => lastChar.includes(el))
	) {
		return;
	} else {
		displayNumber(op);
	}
}

function checkNaN() {
	if (isNaN(answer.textContent)) {
		return;
	} else {
		operation.textContent += answer.textContent;
	}
}

/* -------------------------------------------------------------------------- */
/*                       Onclick event for every button                       */
/* -------------------------------------------------------------------------- */

clear.addEventListener("click", () => {
	resetCount();
	clearScreen();
});

undo.addEventListener("click", () => {
	pressUndo();
});

ans.addEventListener("click", () => {
	displayNumber(answer.textContent);
});

equal.addEventListener("click", () => {
	resetCount();

	pressEqual();
});

period.addEventListener("click", () => {
	pressDecimal();
});

add.addEventListener("click", () => {
	checkNaN();
	resetCount();
	checkOperator("+");
});

substract.addEventListener("click", () => {
	checkNaN();
	resetCount();
	checkOperator("-");
});

multiply.addEventListener("click", () => {
	checkNaN();
	resetCount();
	checkOperator("*");
});

divide.addEventListener("click", () => {
	checkNaN();
	resetCount();
	checkOperator("/");
});

zero.addEventListener("click", () => {
	displayNumber("0");
});

one.addEventListener("click", () => {
	displayNumber("1");
});

two.addEventListener("click", () => {
	displayNumber("2");
});

three.addEventListener("click", () => {
	displayNumber("3");
});

four.addEventListener("click", () => {
	displayNumber("4");
});

five.addEventListener("click", () => {
	displayNumber("5");
});

six.addEventListener("click", () => {
	displayNumber("6");
});

seven.addEventListener("click", () => {
	displayNumber("7");
});

eight.addEventListener("click", () => {
	displayNumber("8");
});

nine.addEventListener("click", () => {
	displayNumber("9");
});
