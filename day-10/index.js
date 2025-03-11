/**
 * Task 1: Output
 */

let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer(); // Bob

/**
 * Task 2: Mistake in the code
 */

let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total); // 15; The mistake is that the add function tries to reassign the total and as total is a global variable and so the it's getting reassigned and it is 15 now.

/**
 * Task 3: Create a function with a nested function and log a variable from the parent function.
 */

function parentFunction() {
  let parentVar = "I'm from the parent function";

  function childFunction() {
    let childVar = "I'm from the child function";
    function grandChildFunction() {
      console.log(parentVar);
    }
    grandChildFunction();
    console.log(childVar);
  }

  childFunction();
}

parentFunction();

/**
 * Task 4: Loop inside a function & use variables outside the loop
 */

function test() {
  for (var j = 0; j < 5; j++) {
    console.log(j); // 0,1,2,3,4
  }
  console.log(j); // 5; bcz i declared with var

  for (let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
  }
  console.log(i); // ReferenceError: i is not defined
}

test();
console.log(i, j); // ReferenceError: i & j is not defined as they are inside a function

/**
 * Task 5: Write a function that tries to access a variable declared inside another function.
 */

function outer() {
  function inner() {
    let innerVar = "This is inside inner function";
  }

  console.log(innerVar); // ReferenceError: innerVar is not defined

  inner();
}

outer();

/**
 * Task 6: Output explaination
 */

console.log(a); // ReferenceError: a can't be accessed before initialization bcz of TDZ
let a = 10;

/**
 * Task 7: Where is the age variable accessible?

function showAge() {
  let age = 25;
  console.log(age);
}

console.log(age);

Options:

- A: In Global
- B: Only inside showAge (✅)
- C: It will cause an error
- D: None of the above
 */

/**
 * Task 8: Output explaination
 */

let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer(); // Hi; Because of the scope chaining, JS will first try to find the message variable inside the inner function, when not found it will step outside the inner function and try to find the message variable in the outer and it will find the variable and log the variable (Hi)

/**
 * Task 9: Output explaination
 */

let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

outer(); // Inner; Because of the scope chaining, JS will first try to find the x variable inside the inner function, it will find the variable and log the variable (Inner)

/**
 * Task 10: Output explaination
 */

function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce(); // -1
reduce(); // -2

// It is called closure even though it has not been taught yet but I have learnt earlier in my programming journey. When a function is returned inside a function and the returned function uses any kind of variables of the outer function, it remembers the value even though the function has finished it's execution. That's why it remembers the previous value and reduces the counter by 1 on calling the reduce function.
