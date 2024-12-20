let input = document.getElementById('input');

function add() {
    input.value += '+';
}

function subtract() {
    input.value += '-';
}

function multiply() {
    input.value += '*';
}

function divide() {
    input.value += '/';
}

function equal() {
    try {
        input.value = eval(input.value); // Use eval cautiously
    } catch (e) {
        input.value = "Error"; // Handle invalid expressions
    }
}

function addNumber(number) {
    input.value += number;
}

function addDecimal() {
    input.value += '.';
}

function addOperator(operator) {
    input.value += operator;
}

function addParentheses(parentheses) {
    input.value += parentheses;
}

function addPower(power) {
    input.value += power;
}

function addSquareRoot(squareRoot) {
    input.value += squareRoot;
}

function addFactorial(factorial) {
    input.value += factorial;
}

function addPercentage(percentage) {
    input.value += percentage;
}

function addExponent(exponent) {
    input.value += exponent;
}

function addLogarithm(logarithm) {
    input.value += logarithm;
}

function clearInput() {
    if (input) {
        input.value = ""; // Clear the input field
        console.log("Cleared input field");
    } else {
        console.error("Input element not found");
    }
}
function backspace() {
    input.value = input.value.slice(0, -1); // Remove the last character
}





































