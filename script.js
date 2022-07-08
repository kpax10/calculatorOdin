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
const decimal = document.querySelector('.decimal');

let displayValue = '';
let userInput = '';
let operator = '';

// loop over numberButtons and add event listener to buttons creating the displayValue
numberButtons.forEach(element => {
  element.addEventListener('click', function (e) {
    if (displayValue.includes('.')) {
      decimal.disabled = true;

      // decimal.style.color = 'red';
    }
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
  decimal.disabled = false;
})

// loop over operator buttons, storing the operator clicked
// once operator is clicked, displayValue = userInput
const operatorButtons = document.querySelectorAll('.btn-operator');

operatorButtons.forEach(element => {
  element.addEventListener('click', function (e) {
    decimal.disabled = false;
    if (operator) equal();
    operator = e.target.textContent;
    if (displayValue === '') return;
    userInput = displayValue;
    displayValue = '';
    console.log(operator);
  })
});

const equalsButton = document.querySelector('.btn-equals');

function equal() {
  if (userInput === '' || operator === '') return;
  displayValue = Number(operate(operator, userInput, displayValue).toFixed(9));
  if (displayValue !== Infinity) {
    display.textContent = displayValue;
    operator = '';
  } else {
    alert('Cant do that.  Please clear screen to continue!')
  }
}

equalsButton.addEventListener('click', equal);
