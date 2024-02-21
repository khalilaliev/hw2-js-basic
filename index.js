/// Level 1 ///

const number1 = Number(prompt("Enter first number:"));
const number2 = Number(prompt("Enter second number:"));

const sumOfPromptResult = number1 + number2;
console.log("Task 1:", sumOfPromptResult);

const rem = number1 % number2;
const pow = number1 ** number2;

console.log("Task 1 rem result:", rem);
console.log("Task 1 pow result:", pow);

/// Level 2 ///

let num = 10;
num += 5;
num -= 2;
num *= 2;
num++;
num++;
num++;
console.log("Task 2 result:", num);

/// Level 3 ///

const remFromDivFirst = 12 % 12;
const remFromDivSecond = 13 % 12;
const remFromDivThird = 14 % 12;

console.log(
  "Task 3 result:",
  remFromDivFirst,
  remFromDivSecond,
  remFromDivThird
);

/// Level 4 ///

const userAge = Number(prompt("Enter your age:"));
console.log(userAge >= 18);

// if (userAge >= 18) {
//   console.log("Task 4 result:", true);
// } else if (userAge <= 18) {
//   console.log("Task 4 result:", false);
// } else {
//   console.log("You have done smth wrong!");
// }

/// Level 5 ///

let x = Number(prompt("Enter value of X"));
let y = Number(prompt("Enter value of Y"));

if (!isNaN(x) && !isNaN(y)) {
  x = x + y;
  y = x - y;
  x = x - y;
  console.log("Task 5 result of X variable:", x);
  console.log("Task 5 result of Y variable:", y);
} else {
  console.log("Enter a number!");
}
