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

function pressDecimal() {
	currentDisplay = operation.textContent;

	if (currentDisplay.indexOf(".") != -1) {
		return;
	} else {
		displayNumber(".");
	}
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
	}
	return sum;
}

function substraction(...anyNumber) {
	let sum = parseFloat(anyNumber[0]);
	for (i = 1; i < anyNumber.length; i++) {
		sum -= parseFloat(anyNumber[i]);
	}

	return sum;
}

function multiplication(...anyNumber) {
	let sum = parseFloat(anyNumber[0]);
	for (i = 1; i < anyNumber.length; i++) {
		sum *= parseFloat(anyNumber[i]);
	}
	return sum;
}

function division(...anyNumber) {
	let sum = parseFloat(anyNumber[0]);
	for (i = 1; i < anyNumber.length; i++) {
		sum /= parseFloat(anyNumber[i]);
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
const conditions = ["+", "-", "*", "/"];

function calculate() {
	numberGiven = operation.textContent;

	if (numberGiven.includes("+")) {
		// addition if plus sign exist
		numberGiven = numberGiven.split("+");
		answer.textContent = addition(...numberGiven);
	} else if (numberGiven.includes("-")) {
		// substract if minus sign exist
		numberGiven = numberGiven.split("-");
		answer.textContent = substraction(...numberGiven);
	} else if (numberGiven.includes("*")) {
		// multiply if star sign exist
		numberGiven = numberGiven.split("*");
		answer.textContent = multiplication(...numberGiven);
	} else if (numberGiven.includes("/")) {
		// division if divide sign exist
		numberGiven = numberGiven.split("/");
		answer.textContent = division(...numberGiven);
	}
}

function checkOperator(op) {
	numberGiven = operation.textContent;

	lastChar = numberGiven.slice(-1);
	firstChar = numberGiven.slice(0);

	if (
		conditions.some(el => firstChar.includes(el)) ||
		conditions.some(el => lastChar.includes(el))
	) {
		console.log("hello ");
		return;
	} else {
		if (conditions.some(el => numberGiven.includes(el))) {
			calculate(op);
			operation.textContent = "";
			displayNumber(answer.textContent);
			displayNumber(op);
		} else if (answer.textContent != "" && operation.textContent == "") {
			displayNumber(answer.textContent);
			displayNumber(op);
		} else {
			displayNumber(op);
		}
	}
}

/* -------------------------------------------------------------------------- */
/*                       Onclick event for every button                       */
/* -------------------------------------------------------------------------- */

clear.addEventListener("click", () => {
	clearScreen();
});

undo.addEventListener("click", () => {
	pressUndo();
});

ans.addEventListener("click", () => {
	displayNumber(answer.textContent);
});

equal.addEventListener("click", () => {
	pressEqual();
});

period.addEventListener("click", () => {
	pressDecimal();
});

add.addEventListener("click", () => {
	checkOperator("+");
});

substract.addEventListener("click", () => {
	checkOperator("-");
});

multiply.addEventListener("click", () => {
	checkOperator("*");
});

divide.addEventListener("click", () => {
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
