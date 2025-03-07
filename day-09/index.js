/**
 * 1. Explain Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.
 */

{
  const country = Bangladesh; // name, country, age's TDZ starts here. country TDZ end here as well
  //
  //
  let name = "Nasib Hossain"; // name TDZ ends here
  //
  //
  //
  const age = 24; // age TDZ ends here
  //
  //
  //
  //
  //
}

/**
 * 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.
 */

// In the execution context's creation phase, variables gets initialized (if possible). For var, it gets initialized with undefined and so if I want to access the variable before declaration, I would get undefined. For let and const, it just gets allocated memory but not initialized and so we can't use the variables  before declaration. It gets into the TDZ until it gets assigned.

console.log(isStudent); // invalid bcz of TDZ (let)
console.log(users); // undefined (var)

let isStudent = true;

var users = 200;

console.log(isStudent); //valid
console.log(users); // valid

// In the execution context's creation phase, this function body is allocated memory and so i can even call the function before this declaration because in the CP the function body gets allocated.

printName("Nasib Hossain");

function printName(name) {
  console.log("My name is " + name);
}
