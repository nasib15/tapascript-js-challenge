/**
 * Task 1: Temp conversion
 */

function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

console.log(celsiusToFahrenheit(80));

/**
 * Task 2: Maximum of Two Numbers
 */

function findMax(num1, num2) {
  if (num1 >= num2) return num1;
  return num2;
}

console.log(findMax(9, 8));

/**
 * Task 3: String is a Palindrome
 */

function isPalindrome(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  if (reversedStr.toLowerCase() === str.toLowerCase())
    return "String is Palindrome";
  return "String is not Palindrome";
}

console.log(isPalindrome("Radar"));

/**
 * Task 4: Factorial
 */

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

/**
 * Task 5: Count vowels
 */

function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) === "a" ||
      str.charAt(i) === "e" ||
      str.charAt(i) === "i" ||
      str.charAt(i) === "o" ||
      str.charAt(i) === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Nehal"));

/**
 * Task 6: Capitalize the First Letter of Each Word in a Sentence
 */

function capitalizeWords(sentence) {
  let capitalizeSentence = sentence.charAt(0).toUpperCase();

  for (let i = 1; i < sentence.length; i++) {
    if (sentence.charAt(i - 1) === " ") {
      capitalizeSentence += sentence.charAt(i).toUpperCase();
    } else {
      capitalizeSentence += sentence.charAt(i);
    }
  }
  return capitalizeSentence;
}

console.log(capitalizeWords("it's time for the javascript"));

/**
 * Task 8: Create a Simple Callback Function
 */

function greet(name, callback) {
  callback(name);
}

greet("Nehal", function (name) {
  console.log("Hello, " + name);
});

/**
 * Task 7: Use an IIFE to Print “Hello, JavaScript!” (Here, JavaScript is argument)
 */

(function (name) {
  console.log("Hello " + name);
})("JavaScript");
