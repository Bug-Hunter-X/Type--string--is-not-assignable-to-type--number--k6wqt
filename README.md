This repository contains a TypeScript code example demonstrating a common type error: assigning a string to a number variable.  The bug.ts file showcases the error, while bugSolution.ts provides a corrected version.  This example highlights the importance of type checking in TypeScript and how to avoid this specific error.

## How to Reproduce

1. Clone this repository.
2. Open bug.ts in a TypeScript compiler or IDE that supports TypeScript.
3. Observe the compiler error indicating that a string is being assigned to a number variable.

## Solution

The bugSolution.ts file corrects this error by ensuring that all variables and function parameters are of the correct type.  This involves carefully checking the types of all values used in calculations and assignments to prevent type mismatches.

## Learning Points

* TypeScript's type system helps catch errors early during development.
* Pay close attention to variable types and function signatures to avoid type-related errors.
* Use TypeScript's type annotations effectively to improve code quality and maintainability.