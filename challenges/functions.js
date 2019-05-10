// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */
function consume(num1, num2, cb) {
  return cb(num1, num2);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

function add(x, y) {
  console.log("add", x + y);
}

consume(1, 2, add);

function multiply(x, y) {
  console.log("multiply", x * y);
}

consume(2, 3, multiply);

function greeting(firstName, lastName) {
  console.log("greeting:", `Hello ${firstName} ${lastName}, nice to meet you!`);
}

consume("Ben", "Feole", greeting);
// LOL added checks before step 3. woops.

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2, 2, add); // 4
consume(10, 16, multiply); // 160
consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: nestedfunction is INSIDE myFunction, so it will have access to anything that myFunction has access too.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
