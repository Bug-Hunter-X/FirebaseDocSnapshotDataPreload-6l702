# Firebase DocumentSnapshot Data Access Before Load

This repository demonstrates a common error in Firebase when accessing properties of a `DocumentSnapshot` before the data has fully loaded.  This often happens due to the asynchronous nature of Firebase operations.

## The Bug
The bug occurs when code attempts to read data from a `DocumentSnapshot` before the asynchronous operation that retrieves the data has completed.  This can lead to `undefined` values or errors.

## The Solution
The solution involves properly handling the asynchronous nature of Firebase operations, typically using Promises or async/await to ensure that the code accessing the data executes only after the data has been loaded.

## Usage
1. Clone this repository.
2. Make sure you have Node.js and npm installed.
3. Run `npm install` to install the necessary packages.
4. Run `node bug.js` to see the bug in action.
5. Run `node bugSolution.js` to see the solution.

## Contributing
Contributions are welcome!