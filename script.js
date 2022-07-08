'use strict;'

const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => Number(a) - Number(b);
const multiply = (a, b) => Number(a) * Number(b);
const divide = (a, b) => Number(a) / Number(b);

const operate = function (operator, a, b) {
  if (operator === '+') return add(a, b)
  if (operator === '-') return subtract(a, b)
  if (operator === '×') return multiply(a, b)
  if (operator === '÷') return divide(a, b)
}

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

// Clear display
const clearButton = document.querySelector('.btn-clear');

clearButton.addEventListener('click', function () {
  displayValue = '';
  userInput = '';
  operator = '';
  display.textContent = 0;
})

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
  displayValue = operate(operator, userInput, displayValue);
  display.textContent = displayValue;
});