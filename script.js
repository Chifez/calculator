"use strict";
// grabbing all the DOM element required for manipulation
let inputEl = document.querySelector(".input_box");
let operatorEl = document.querySelectorAll(".operator");
let numbersEl = document.querySelectorAll(".num");

// console.log(numbersEl);
let operatorList = ["+", "-", "*", "/"];
let inputs = [];
let operator;
let isOperator = false;

//adding a click event that listens for each click of the numbers
for (let i = 0; i < numbersEl.length; i++) {
  numbersEl[i].addEventListener("click", function (e) {
    //this checks if the operator has been clicked
    if (isOperator) {
      // stores the operator-type before clearing
      operator = inputEl.value;
      console.log(operator);
      inputEl.value = "";

      //displays the current number been clicked
      inputEl.value += e.currentTarget.textContent;
      isOperator = false;
    } else {
      inputEl.value += e.currentTarget.textContent;
      isOperator = false;
    }
  });
}

//adding click events to the operators
for (let i = 0; i < operatorEl.length; i++) {
  operatorEl[i].addEventListener("click", function (e) {
    //this saves the numbers displayed on the input into an array before clearing the screen
    inputs.push(inputEl.value);
    inputEl.value = "";
    inputEl.value += e.currentTarget.textContent;
    //this sets the isOperator to a boolean true to show that an operator has been clicked
    isOperator = true;
  });
}

//adding an event to the clear button
document.querySelector(".clear").addEventListener("click", function (e) {
  inputEl.value = inputEl.value.slice(0, inputEl.value.length - 1);
  operator = "";
  inputs = [];
});

//adding an event handler to the equal button to handle the computation
document.querySelector(".equals").addEventListener("click", function (e) {
  inputs.push(inputEl.value);
  let input1 = Number(inputs[0]);
  let input2 = Number(inputs[1]);
  console.log(input1, input2);
  if (operator === "+") {
    return (inputEl.value = Number(input1 + input2));
  } else if (operator === "-") {
    return (inputEl.value = Number(input1 - input2));
  } else if (operator === "*") {
    return (inputEl.value = Number(input1 * input2));
  } else {
    return (inputEl.value = Number(input1 / input2));
  }
});
