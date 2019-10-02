'use strict';

// A common mistake users make when they type in an URL is to put spaces between words
// or letters. A solution that developers can use to solve this problem is to replace
// any spaces with a %20. Write a method that takes in a string and replaces all its
// empty spaces with a %20. Your algorithm can only make 1 pass through the string.

// Examples of input and output for this problem can be

// Input: tauhida parveen
// Output: tauhida%20parveen

// Input: www.thinkful.com /tauh ida parv een
// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

function URLify (string) {
  return string.split(' ').join('%20');
}

function URLifyNoSplitJoin (string) {
  let returnString = '';
  for (let i=0; i<string.length; i++) {
    if (string[i] === ' ') returnString += '%20';
    else returnString += string[i];
  }
  return returnString;
}

//console.log(URLifyNoSplitJoin('www.thinkful.com /tauh ida parv een'));

function filter(arr) {
  let returnArr = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i] >= 5) returnArr.push(arr[i]);
  }
  return returnArr;
}

const testArr=[1, 5, 16, 3, 8, 9, 20];
//console.log(filter(testArr));

function maxSum(arr) {}