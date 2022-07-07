'use strict;'

const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = function (operator, a, b) {
  if (operator === '+') return add(a, b)
  if (operator === '-') return subtract(a, b)
  if (operator === '*') return multiply(a, b)
  if (operator === '/') return divide(a, b)
}

// console.log(operate('/', 1, 3));

const numberButtons = document.querySelectorAll('#btn-num');
const display = document.querySelector('#display-numbers');

let displayValue = '';
let userInput = '';
let operator = '';

// loop over numberButtons and add event listener to buttons creating the displayValue
numberButtons.forEach(element => {
  element.addEventListener('click', function (e) {
    if (!(displayValue.length > 10)) {
      displayValue += e.target.textContent;
      display.textContent = displayValue;
    } else return;
  })
});

// loop over operator buttons, storing the operator clicked
// once operator is clicked, displayValue = userInput
const operatorButtons = document.querySelectorAll('.btn-operator');

operatorButtons.forEach(element => {
  element.addEventListener('click', function (e) {
    userInput = displayValue;
    displayValue = '';
    operator = e.target.textContent;
    console.log(operator);
  })
});

const equalsButton = document.querySelector('.btn-equals');

equalsButton.addEventListener('click', function () {
  console.log(operate(operator, userInput, displayValue))
});