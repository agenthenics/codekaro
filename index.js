
console.log("First will learn about Array items Access");
let fruits = ["Apple","banana","Orange"];

console.log(fruits);
// will access the single values
console.log(fruits[1]);

console.log(fruits[4]); // as we access this won't return any value cause its not defined know as undefined

// let's add some fruits using push method: push method says add the value in the end of the array

fruits.push("kiwi","grapes");
console.log(fruits); // here in the array the values is added at the end.so let's call again below
console.log(fruits[4]);

// let's remove some fruits using pop method: pop method says let's remove the value from the end of the array.

fruits.pop("banana"); // i tried passing the key or value it doesn't affect the array , it will remove the last vaule of array. 
fruits.pop();
console.log(fruits);

fruits.push("almonds",'peantus')
console.log(fruits);

// what if i want to change/remove the value from the between of array then i have to use splice method :  eg: array.splice(indexPosition,deleteCountValue,AddValue)

fruits.splice(2,2,"KIWI");  // this means (startFromtheIndex2,removeCount orange,almonds, add Kiwi on remove index)

console.log(fruits);


let grocery = [['Milk','bread','butter'],['perfumes','showergel','Shirt']];

console.log(grocery);
// how to call multiple value with array index eg: milk,shirt?
console.log(grocery[0][0],grocery[1][2]);

// Call butter or whole second index ?
console.log(grocery[0][2],grocery[1]);
// add Vivo and nokia in lists ?
grocery[0].push('Vivo');
grocery[1].push('Nokia');

console.log(grocery);

// replace Bread to brown bread ?

grocery[0].splice(1,1,'Brown Bread'); 
console.log(grocery);
grocery.splice(grocery[0][1],1,'Brown Bread'); // thought it will work as above but no it didn't worked as above whereas it remove the whole 0 index and add brown bread

console.log(grocery);

console.log(typeof grocery); // in javascript array are objects

// G.Q why in javascript arrays are objects => JS is a prototype-based language, so there are only primitive types and objects. It grants flexibility but makes things more confusing at the same time

let users = {
  name : 'ASHISH BASURI',
  age:'28',
  address:'mumbai',
  hobby:['cycling','swimming'],
	travel:['Rajasthan','Mysore']


};

// add one more value eg:pichole lake as place

users.place='pichole lake';
// users.push({place});
console.log(users);

// console.log(users);
// G.Q Call the users name who like swimming in rajasthan,pichole lake
console.log(users.name+' Likes ' +users.hobby[1]+' in ' + users.travel[0] +','+  users.place); // whereas + use to concat the values


//  create an array with name and email

let candidate = [
  {'name':'rohan kadam','email':'rohan@mail.com'},
  {'name':'rajesh kadam','email':'rajesh@mail.com'},
  {'name':'supriya jadhav','email':'supriya@mail.com'},
  {'name':'jeevan meeca','email':'jeevan@mail.com'},
]

// console.log(candidate);

// call random person name for the lottery
// get a value with random function
 // i forget the concept so i google it
let randomIndex = Math.floor(Math.random() * candidate.length); 
console.log(candidate[randomIndex]);

// condition in js
let age = 28;
// console.log(age);

// G.A Check Age conditional to go on a Date ?

if(age>26){
  console.log('You can go on a Date');
}else{
console.log('No Dating Allowed');
}

// condition work for two => And , OR example 
// And means when all the condition are truee , it could have more than one condition else false
// OR means when any one condition is true out of any other conditions else false
//    OR
// And => when both the condition are true else false
// OR => When one out of condition is true else false

if(true){
	console.log('Life is beautiful');
}else{
console.log('Life is sad');
}

let Aage = 24; let money = 300;
if(Aage >= 26 && money>=500){
  console.log('You are dating young person who is energetic with money and hard working');
}else if(Aage < 26 || money<= 300){
  console.log('You are dating young person who is energetic but with less money and  less confidence untill he improves the skill with real life experience');
}else{
	console.log('Just be friend, not enough to date anybody')
}


// now starts with ternary operator
let check$ = 35;
let valueess = (check$ == 30) ? 'its 30 rupees' : (check$ < 30) ? 'Less then 30 rupees' : 'Greater than 30 rupees';
console.log(valueess);

//  what is double == or === ? 
// == checks the value of the keyword and === check the datatype and value too.
console.log('== checks the value of the keyword and === check the datatype and value too.');

// what is falsly conditional
// Falsy => 0 , -0 , "" , '' , undefined, null , nan know as false
// anything apart from falsy is treated as truth values.
let result = '';

// console.log(boolean result);
 
























