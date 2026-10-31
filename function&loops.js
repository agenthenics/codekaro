console.log('Functions and Loopss');

console.log('Assignment 1');
// Print the square of every number using a for loop.

let numbers = [2, 4, 6, 8, 10, 12];

for(let i= 0;i<numbers.length;i++){
	console.log(numbers[i]*numbers[i]);
}

// foreach function can be use with array only 
// numbers.forEach(n=>{
// 	console.log(n*n);
// });


console.log('Assignment 2');
// Create an arrow function calculateDiscount(price) that returns the price after a 15% discount. Test it with all prices.

let prices = [500, 1200, 999, 2500, 750];
// block arrow function
calculateDiscount = (val) => {
let discount = val * 0.15;
  return result = val - discount;	
}

// one way used forEach Array with arrow function
prices.forEach(p=>{
	console.log(calculateDiscount(p));
})
// single block function called
console.log(calculateDiscount(prices[3]));
console.log('Assignment 3');
// Using forEach(), print the names of users whose age is 18 or above.

let userss = [
	  { name: "Aman", age: 16 },
  { name: "Priya", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Neha", age: 14 },
  { name: "Karan", age: 27 }
];

userss.forEach(usr=>{
  if(usr.age>18){
	console.log(usr.name);
	}
});


console.log('Assignment 4');
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

employees.forEach(emp=>{
	console.log(calculateNetSalary(emp.name,emp.salary));
});

console.log('Assignment 5');
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
console.log(users.length);
// Number of adults (18+)
let AdultCount = 0;
let minorCount = 0;
for(let i=0;i<users.length;i++){
  if(users[i].age>18){
	AdultCount = AdultCount+1;
  }else if(users[i].age<18){
	minorCount = minorCount+1;
  }	
}	
console.log(AdultCount);
// Number of minors (<18)
console.log(minorCount);
// Name of the oldest user
let oldestUserName;
let age=0;
for(let i=0;i<users.length;i++){
  if(age<users[i].age){
	age = users[i].age;
	oldestUserName = users[i].name;
  }
}
console.log(oldestUserName);
// Average age of all users
let sumAgeUser=0;
let average;
let sumUser = users.forEach(function(n){
  sumAgeUser = sumAgeUser+n.age;
 average = sumAgeUser/users.length;
});
console.log(average);
// another type of tried example
let averageAge;
let sumAgeUsers=0;
for(let i=0;i<users.length;i++){
  sumAgeUsers  = sumAgeUsers + users[i].age;
 	averageAge = sumAgeUsers/users.length;
}
console.log(averageAge);
