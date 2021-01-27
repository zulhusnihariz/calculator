const operation = document.querySelector("#operation");
const answer = document.querySelector("#answer");
const equalSign = document.querySelector("#equal-sign");

const clear = document.getElementById("CE");
const calculate = document.getElementById("=");
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

function clearScreen() {
	operation.textContent = "";
	answer.textContent = "";
	equalSign.textContent = "";
}

function displayNumber(anyNumber) {
	if (operation != undefined) {
		operation.textContent += anyNumber;
	} else {
		operation.textContent = anyNumber;
	}
	console.log(anyNumber);
}

function displayAnswer() {
	answer.textContent = "Answer here";
}

function calcOperation() {
	equalSign.textContent = "=";
	displayAnswer();
}

// onclick event for every button

clear.addEventListener("click", () => {
	clearScreen();
});

calculate.addEventListener("click", () => {
	calcOperation();
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
