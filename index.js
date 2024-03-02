// RangeError: Invalid time value in JavaScript

// EXAMPLE 1 - Calling a method on an invalid date

console.log(new Date('asdf')); // 👉️ Invalid Date
console.log(new Date('2022-32-33')); // 👉️ Invalid Date
console.log(new Date('one-two-20')); // 👉️ Invalid Date

// ------------------------------------------------------------------

// // EXAMPLE 2 - Only call date methods on valid date objects

// console.log(new Date(1317996123)); // 👉️ Fri Jan 16 ...
// console.log(new Date('24 September 2022 15:30 UTC')); // 👉️ Sat Sep 24 ...

// ------------------------------------------------------------------

// // EXAMPLE 3 - Your timestamp might be wrapped in a string

// // 👇️ this is a string
// const timestamp = '1675964045493';

// const date = new Date(timestamp);
// console.log(date); // Invalid Date

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using parseInt() method to convert the string to an integer when calling Date()

// const timestamp = '1675964045493';

// const date = new Date(parseInt(timestamp));
// console.log(date); // 2023-02-09T17:34:05.493Z

// console.log(date.toISOString()); // 2023-02-09T17:34:05.493Z

// ------------------------------------------------------------------

// // EXAMPLE 5 - Validating a date before calling a method

// function dateIsValid(date) {
//   return !Number.isNaN(new Date(date).getTime());
// }

// console.log(dateIsValid(1317996123)); // 👉️ true
// console.log(dateIsValid('24 September 2022 15:30 UTC')); // 👉️ true
// console.log(dateIsValid('asdf')); // 👉️ false
// console.log(dateIsValid('2022-32-33')); // 👉️ false
