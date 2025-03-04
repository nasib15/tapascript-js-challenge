/**
 * Task 1: Generate a Pyramid Pattern
 * *
 * **
 * ***
 * ****
 * *****
 */

let stars = "";

for (let i = 1; i <= 5; i++) {
  for (let j = i; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars);
}

/**
 * Task 2: Create multiplication table
 */

const num = 4;

for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + num * i);
}

/**
 * Task 3: Summation of all odd numbers between 1 to 500
 */

let sum = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 2 === 1) {
    sum += i;
  }
}

console.log("Summation of all odd numbers from 1 to 500 is " + sum);

/**
 * Task 4: Skipping Multiples of 3
 */

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

/**
 * Task 5: Reverse Digits of a Number (Using while loop)
 */

let number = 8260;
let reversedNumber = 0;

while (number > 0) {
  let digit = number % 10;
  reversedNumber = reversedNumber * 10 + digit;
  number = Math.floor(number / 10);
}

console.log(reversedNumber);
