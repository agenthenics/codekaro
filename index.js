
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
  name : 'ASHISH BASURI'
};

console.log(users);





























