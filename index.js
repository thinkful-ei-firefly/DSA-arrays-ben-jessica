'use strict';

const MyArray = require ('./array');

let arr = new MyArray();

console.log(arr);

//What is the length, capacity and memory address of your array?
//Length 0, capacity 0, memory address 0

arr.push(5);
arr.push(15);
arr.push(19);
arr.push(45);
arr.push(10);

console.log(arr);

//What is the length, capacity and memory address of your array?
//Explain the result of your program after adding the new lines of code.
//Length 5, capacity 12, memory address 3
//Length increased to 5 due to 5 push commands
//Capacity was increased twice, once to 3 after the first push
// and once to 12 after the fourth push, in order to account for the growing array length
// in memory.
//Memory address was changed from 0 to 3 after the fourth push (the second resizing of the array).


console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr);

// //What is the length, capacity, and address of your array? 
// //Explain the result of your program after adding the new lines of code.
// //Length is now 2 (removed 3 items)
// //Memory address and capacity are the same

console.log(arr.get(0));

while (arr.length > 0) {
  arr.pop();
}

console.log(arr);
arr.push('tauhida');
console.log(arr.get(0));
// //The result is NaN because our memory class only accepts numbers as acceptable entries.
// //Passing text values causes it to be parsed to NaN.

// //The resize() function in our Array class allocates new memory based on the size of the array.
// //It copies elements of an old array to a larger memory space and updates the array capacity
// //to reflect this change.