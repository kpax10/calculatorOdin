'use strict;'

const add = (a, b) => a + b;
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

const buttonNumbers = document.querySelectorAll('#btn-num');
const display = document.querySelector('#display-numbers');

let displayValue = '';

// loop over buttonNumbers and add event listener to buttons creating the displayValue
buttonNumbers.forEach(element => {
  element.addEventListener('click', function (e) {
    if (!(displayValue.length > 10)) {
      displayValue += e.target.textContent;
      display.textContent = displayValue;
    } else return;
  })
});

