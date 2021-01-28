/* -------------------------------------------------------------------------- */
/*                        Declare element as variables                        */
/* -------------------------------------------------------------------------- */

const operation = document.querySelector("#operation");
const answer = document.querySelector("#answer");
const equalSign = document.querySelector("#equal-sign");

const clear = document.getElementById("CE");
const equal = document.getElementById("=");
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
/*                   Clear screen and variables when pressed                  */
/* -------------------------------------------------------------------------- */

function clearScreen() {
	operation.textContent = "";
	answer.textContent = "";
	equalSign.textContent = "";
}

/* -------------------------------------------------------------------------- */
/*                   Display whatever pressed on the screen                   */
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
	console.log(anyNumber);
}

/* -------------------------------------------------------------------------- */
/*                        onclick for equal sign button                       */
/* -------------------------------------------------------------------------- */

function pressEqual() {
	if (operation.textContent != "") {
		equalSign.textContent = "=";
		calculate();
		let currentAns = answer.textContent;
		operation.textContent = currentAns;
		operation.style.visibility = "hidden";
		// displayAnswer();
	} else {
		return;
	}
}

/* -------------------------------------------------------------------------- */
/*                                 Operations                                 */
/* -------------------------------------------------------------------------- */

function addition(firstNum, secondNum) {
	return parseInt(firstNum) + parseInt(secondNum);
}

function substraction(firstNum, secondNum) {
	parseInt(firstNum);
	parseInt(secondNum);
	return parseInt(firstNum) - parseInt(secondNum);
}

function multiplication(firstNum, secondNum) {
	parseInt(firstNum);
	parseInt(secondNum);
	return parseInt(firstNum) * parseInt(secondNum);
}

function division(firstNum, secondNum) {
	parseInt(firstNum);
	parseInt(secondNum);
	return parseInt(firstNum) / parseInt(secondNum);
}

/* -------------------------------------------------------------------------- */
/*                        Calculate numbers on display                        */
/* -------------------------------------------------------------------------- */

function calculate() {
	numberGiven = operation.textContent;
	console.log(numberGiven);

	if (numberGiven.includes("+")) {
		numberGiven = numberGiven.split("+");
		console.log(numberGiven);
		answer.textContent = addition(numberGiven[0], numberGiven[1]);
	} else if (numberGiven.includes("-")) {
		numberGiven = numberGiven.split("-");
		console.log(numberGiven);
		answer.textContent = substraction(numberGiven[0], numberGiven[1]);
	} else if (numberGiven.includes("*")) {
		numberGiven = numberGiven.split("*");
		console.log(numberGiven);
		answer.textContent = multiplication(numberGiven[0], numberGiven[1]);
	} else if (numberGiven.includes("/")) {
		numberGiven = numberGiven.split("/");
		console.log(numberGiven);
		answer.textContent = division(numberGiven[0], numberGiven[1]);
	}
}

/*
1. Grab current string when an operator is pressed
2. Split into list, take out operator, obtained list of numbers

[12972, "+", 9373]

answer.textContent = addition(12972,9373);


function addition (firstNum, secondNum){
	return firstNum+secondNum
}

function substraction (firstNum, secondNum){
	return firstNum-secondNum
}

function multiplication (firstNum, secondNum){
	return firstNum*secondNum
}

function division (firstNum, secondNum){
	return firstNum/secondNum
}


*/

/* --------------------- onclick event for every button --------------------- */

clear.addEventListener("click", () => {
	clearScreen();
});

equal.addEventListener("click", () => {
	pressEqual();
});

add.addEventListener("click", () => {
	displayNumber("+");
});

substract.addEventListener("click", () => {
	displayNumber("-");
});

multiply.addEventListener("click", () => {
	displayNumber("*");
});

divide.addEventListener("click", () => {
	displayNumber("/");
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
