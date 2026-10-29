
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













