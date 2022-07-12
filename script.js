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

const numberBtns = document.querySelectorAll('#btn-num');
const display = document.querySelector('#display-numbers');
const decimal = document.querySelector('.decimal');

let displayValue = '';
let userInput = '';
let operator = '';

// loop over numberBtns and add event listener to buttons creating the displayValue
numberBtns.forEach(element => {
  element.addEventListener('click', function (e) {
    if (displayValue.length > 9) return;
    displayValue += e.target.textContent;
    display.textContent = displayValue;
    if (displayValue.includes('.')) {
      decimal.disabled = true;
      decimal.style.color = 'black';
    }
  })
});

const clearBtn = document.querySelector('.btn-clear');

clearBtn.addEventListener('click', function () {
  displayValue = '';
  userInput = '';
  operator = '';
  display.textContent = 0;
  decimal.disabled = false;
})

const deleteBtn = document.querySelector('.btn-delete');

deleteBtn.addEventListener('click', function () {
  display.textContent = displayValue.slice(0, displayValue.length - 1);
  displayValue = displayValue.slice(0, displayValue.length - 1);
  if (displayValue.length === 0) {
    return display.textContent = '0';
  }
  return displayValue;
})

// loop over operator buttons, storing the operator clicked
// once operator is clicked, displayValue = userInput
const operatorBtns = document.querySelectorAll('.btn-operator');

operatorBtns.forEach(element => {
  element.addEventListener('click', function (e) {
    decimal.disabled = false;
    if (operator) equal();
    operator = e.target.textContent;
    if (displayValue === '') return;
    userInput = displayValue;
    displayValue = '';
  })
});

const equalsButton = document.querySelector('.btn-equals');

function equal() {
  if (userInput === '' || operator === '') return;
  let displayLength;

  displayValue = operate(operator, userInput, displayValue);
  displayLength = displayValue.toString().length;
  if (displayLength > 9) {
    displayValue = displayValue
      .toString()
      .slice(0, 10);
  }

  if (displayValue !== Infinity) {
    display.textContent = displayValue;
    operator = '';
  } else {
    alert('Cant do that.  Please clear screen to continue!')
  }
}

equalsButton.addEventListener('click', equal);