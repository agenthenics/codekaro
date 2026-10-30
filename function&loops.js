console.log('Functions and Loops');

// Assignment 1
// Print the square of every number using a for loop.

let numbers = [2, 4, 6, 8, 10, 12];

// Assignment 2
// Create an arrow function calculateDiscount(price) that returns the price after a 15% discount. Test it with all prices.

let prices = [500, 1200, 999, 2500, 750];
// Assignment 3
// Using forEach(), print the names of users whose age is 18 or above.

// let users = [
//   { name: "Aman", age: 16 },
//   { name: "Priya", age: 22 },
//   { name: "Rahul", age: 18 },
//   { name: "Neha", age: 14 },
//   { name: "Karan", age: 27 }
// ];


// Assignment 4
// Create a function calculateNetSalary(name, salary) that deducts 10% TDS and 5% PF, then returns the final in-hand salary. Call the function for every employee.

let employees = [
  { name: "Aman", salary: 50000 },
  { name: "Priya", salary: 75000 },
  { name: "Rahul", salary: 62000 },
  { name: "Neha", salary: 48000 },
  { name: "Karan", salary: 90000 }
];

function calculateNetSalary(name,salary){
  let tds = salary * 0.1;
  let pf = salary * 0.05;
  let salPf = tds + pf;
  let result = salary - salPf;
  return name +' in-hand salary is '+ result;

}
console.log('Example 1 for in-hand salary after reducing tds and pf');
console.log(calculateNetSalary(employees[0].name,employees[0].salary));
console.log(calculateNetSalary(employees[1].name,employees[1].salary));
console.log(calculateNetSalary(employees[2].name,employees[2].salary));
console.log(calculateNetSalary(employees[3].name,employees[3].salary));
console.log(calculateNetSalary(employees[4].name,employees[4].salary));

console.log('Example 2 for in-hand salary after reducing tds and pf using loop')

// foreach(employees as value){
// 	return calculateNetSalary(value.name,value.salary);
// }

// Assignment 5 (Hard)
// Using the users array, print:

let users = [
  { name: "Aman", age: 16 },
  { name: "Priya", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Neha", age: 14 },
  { name: "Karan", age: 27 },
  { name: "Simran", age: 31 },
  { name: "Vikram", age: 45 },
  { name: "Riya", age: 19 }
];

// Total users

// Number of adults (18+)

// Number of minors (<18)

// Name of the oldest user

// Average age of all users