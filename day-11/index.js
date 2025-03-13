/**
 * Task 1: Output and why?
  function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(count);
    };
  }
  const counter = outer();
  counter(); // 1
  counter(); // 2

  Explanation: The inner function remembers the count variable bcz of the closure.
 */

/**
 * Task 2: Output and why?
  function testClosure() {
    let x = 10;
    return function () {
      return x * x;
    };
  }
  console.log(testClosure()()); // 100

  Explanation: After the testClosure function is invoked, the inner function is returned and then immediately invoked. The inner function remembers the x variable bcz of the closure.
 */

/**
 * Task 3: Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.
 */

function buttonClosure() {
  const buttonContainer = document.getElementById("button");

  const btn = document.createElement("button");

  btn.innerText = "Increase count";

  let count = 0;

  btn.addEventListener("click", function () {
    count++;
    console.log("The btn was clicked", count, "times");
  });

  buttonContainer.appendChild(btn);
}

buttonClosure();

/**
 * Task 4: Write a function createMultiplier(multiplier) that returns another function to multiply numbers.
 */

function createMultiplier(multiplier) {
  return function (mul) {
    return mul * multiplier;
  };
}

const baseMultiplier = createMultiplier(5);
console.log(baseMultiplier(2)); // 10
console.log(baseMultiplier(4)); // 20

/**
 * Task 5: What happens if a closure references an object?
    - 1. The object is garbage collected immediately
    - 2. The object remains in memory as long as the closure exists (✅)
    - 3. The object is automatically cloned
    - 4. None of the Above.

    Explanation: Bcz the closure creates when I invokes a function which returns something where anything is used of the outer scope. So, if I manually make the closure null, then it will stop referencing to that used variable/something.
 */

/**
 * Task 6: Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.
 */

function counter(num) {
  let count = num;

  return {
    increment: (add) => {
      count = count + add;
      console.log("The count is now", count);
    },
    decrement: (min) => {
      count = count - min;
      console.log("The count is now", count);
    },
    reset: () => {
      count = 0;
      console.log("The count is now", count);
    },
  };
}

const baseCounter = counter(2);
console.log(baseCounter.increment(2)); // 4
console.log(baseCounter.increment(2)); // 6
console.log(baseCounter.decrement(4)); // 2
console.log(baseCounter.increment(8)); // 10
console.log(baseCounter.reset()); // 0
