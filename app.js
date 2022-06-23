// Variable Declaration
const num1 = Number(prompt("Enter the first number"));
const num2 = Number(prompt("Enter your second number"));
const sign = prompt("Which operation do you want to perform\n +, -, /, *");

// Logic for calculator
switch (sign) {
  case "+":
    alert(`The answer of ${num1} + ${num2} = ${num1 + num2}`);
    break;

  case "-":
    alert(`The answer of ${num1} - ${num2} = ${num1 - num2}`);
    break;

  case "/":
    alert(`The answer of ${num1} / ${num2} = ${num1 / num2}`);
    break;

  case "*":
    alert(`The answer of ${num1} * ${num2} = ${num1 * num2}`);
    break;

  default:
    alert("Wrong Input");
    break;
}
