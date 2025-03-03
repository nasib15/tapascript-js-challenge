/**
 * Task 1: Explanation of the code
 
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

Q. What will be the output of this code snippet and why?
Ans: As JS is case-sensitive, that's why it skips the first case and print the default case in the console.
 */

let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

/*
 * Task 2: ATM Cashwithdrawal system
 */

const amount = 1700;

if (amount % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}

/*
 * Task 3: Build a Calculator with switch-case
 */

const operator = "*";

switch (operator) {
  case "+":
    console.log(10 + 5);
    break;
  case "-":
    console.log(10 - 5);
    break;
  case "*":
    console.log(10 * 5);
    break;
  case "/":
    console.log(10 / 5);
    break;
  default:
    console.log("Invalid operators");
}

/*
 * Task 4: Pay for your movie ticket
 */

const age = 61;

if (age < 18) {
  console.log("Your ticket price is $3");
} else if (age >= 18 && age <= 60) {
  console.log("Your ticket price is $10");
} else if (age > 60) {
  console.log("Your ticket price is $8");
} else {
  console.log("Please provide valid age");
}

/*
 * Task 5: Horoscope Sign Checker
 */

const birthMonth = "March";

switch (birthMonth.toLowerCase()) {
  case "january":
  case "february":
    console.log("Your zodiac sign is Aquarius");
    break;
  case "february":
  case "march":
    console.log("Your zodiac sign is Pisces");
    break;
  case "march":
  case "april":
    console.log("Your zodiac sign is Aries");
    break;
  case "april":
  case "may":
    console.log("Your zodiac sign is Taurus");
    break;
  case "may":
  case "june":
    console.log("Your zodiac sign is Gemini");
    break;
  case "june":
  case "july":
    console.log("Your zodiac sign is Cancer");
    break;
  case "july":
  case "august":
    console.log("Your zodiac sign is Leo");
    break;
  case "august":
  case "september":
    console.log("Your zodiac sign is Virgo");
    break;
  case "september":
  case "october":
    console.log("Your zodiac sign is Libra");
    break;
  case "october":
  case "november":
    console.log("Your zodiac sign is Scorpio");
    break;
  case "november":
  case "december":
    console.log("Your zodiac sign is Sagittarius");
    break;
  case "december":
  case "january":
    console.log("Your zodiac sign is Capricorn");
    break;
  default:
    console.log("Please enter a valid month");
}

/*
 * Task 6: Which Triangle?
 */

const side1 = "equal";
const side2 = "equal";
const side3 = "equal";

if (side1 === "equal" && side2 === "equal" && side3 === "equal") {
  console.log("Equilateral Triangle");
} else if (
  (side1 === "equal" && side2 === "equal") ||
  (side1 === "equal" && side3 === "equal") ||
  (side2 === "equal" && side3 === "equal")
) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}
