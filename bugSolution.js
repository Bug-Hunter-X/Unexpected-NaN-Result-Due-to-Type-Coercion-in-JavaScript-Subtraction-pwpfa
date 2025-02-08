function myFunction(a, b) {
  // Check if inputs are numbers before subtracting
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input: both arguments must be numbers"; // Return an error message for non-numeric inputs
  }
  return a - b;
}

console.log(myFunction(10, 5)); // 5
console.log(myFunction(10, "5")); // "Invalid input: both arguments must be numbers"
console.log(myFunction(10, null)); // "Invalid input: both arguments must be numbers"
console.log(myFunction(10, undefined)); // "Invalid input: both arguments must be numbers" 