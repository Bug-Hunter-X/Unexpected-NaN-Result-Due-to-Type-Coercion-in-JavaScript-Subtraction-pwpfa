function myFunction(a, b) {
  return a - b; // This will cause issues if a or b is not a number
}

console.log(myFunction(10, "5")); // NaN
console.log(myFunction(10, null)); // NaN
console.log(myFunction(10, undefined)); // NaN