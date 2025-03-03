/**
 * Task 1: Even or Odd
 */

const number = 11;

if (number % 2 === 0) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}

/**
 * Task 2: Driving license checking
 */

const age = 20;

if (age >= 18) {
  console.log("You are eligible for Driving license");
} else {
  console.log("You are not eligible for Driving license");
}

/**
 * Task 3: Calculate CTC with a Bonus
 */

const salary = 12300;
const annualSalary = salary * 12;
const bonus = annualSalary * 0.2;

const salaryPerAnum = annualSalary + bonus;

console.log("Salary per annum: " + salaryPerAnum);

/**
 * Task 4: Traffic Light
 */

const trafficLight = "green";

if (trafficLight.toLowerCase() === "red") {
  console.log("You should stop");
} else {
  console.log("You should go");
}

/**
 * Task 5: Electricity Bill Calculation
 */

const units = 4;

const unitsPerMonth = 4 * 30;

const billPerMonth = unitsPerMonth * 150;

console.log("Your monthly Electricity bill is " + billPerMonth);

const billPerYear = billPerMonth * 12;

console.log("Your annual Electricity bill is " + billPerYear);

const discountedPrice = billPerYear - billPerYear * 0.2;

console.log("Your discount is " + billPerYear * 0.2);

console.log("You are charged for " + discountedPrice + " for annual payment.");

/**
 * Task 6: Leap Year Calculation
 */

const year = 1900;

(year % 100 !== 0 && year % 4 === 0) || year % 400 === 0
  ? console.log(year + " is a leap year")
  : console.log(year + " is not a leap year");

/**
 * Task 7: Finding the max of the 3 numbers
 */

const p = 11;
const q = 7;
const r = 12;

if (p >= q && p >= r) {
  console.log(p + " is the max among the 3 numbers");
} else if (q >= p && q >= r) {
  console.log(q + " is the max among the 3 numbers");
} else if (p === q && q === r) {
  console.log(
    "All the numbers are same. So," + p + " is the max among the 3 numbers"
  );
} else {
  console.log(r + " is the max among the 3 numbers");
}

/**
 * Task 8: Bitwise doubling
 */

const count = 5;

console.log(
  "This is " +
    count +
    ". And this is " +
    (count << 1) +
    " which is done by bitwise left shift operator"
);
