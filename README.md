# Unexpected NaN Result Due to Type Coercion in JavaScript Subtraction

This repository demonstrates a subtle bug in JavaScript related to type coercion during subtraction. The `bug.js` file contains a function that subtracts two numbers, but it fails to handle non-numeric inputs correctly, leading to `NaN` (Not a Number) results.

The `bugSolution.js` file provides a corrected version of the function that performs type checking before the subtraction.  This ensures that the function behaves as expected even when unexpected input types are provided.

This example highlights the importance of robust input validation and type checking in JavaScript to prevent unexpected behavior and runtime errors.