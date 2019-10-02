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
//O(n)

//console.log(URLifyNoSplitJoin('www.thinkful.com /tauh ida parv een'));

function filter(arr) {
  let returnArr = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i] >= 5) returnArr.push(arr[i]);
  }
  return returnArr;
}
//O(n)

const testArr=[1, 5, 16, 3, 8, 9, 20];
//console.log(filter(testArr));

function maxSum(arr) {
  let maxSum = arr[0];
  let runSum = 0;
  for (let i=0; i<arr.length; i++) {
    runSum += arr[i];
    if (runSum > maxSum) maxSum = runSum;
  }
  return maxSum;
}
//O(n)

// const sumArr = [4, 6, -3, 5, -2, 1];
// console.log(maxSum(sumArr));

function mergeArrays(arr1, arr2) {
  const arr1L = arr1.length;
  const arr2L = arr2.length;
  let maxL;
  const returnArr=[];
  if (arr1L > arr2L) {
    maxL = arr1L;
  } else maxL = arr2L;
  for (let i=maxL; i>=0; i--) {
    if (arr1[arr1.length-1] >= arr2[arr2.length-1]) returnArr.push(arr1.pop());
    if (arr1[arr1.length-1] <= arr2[arr2.length-1]) returnArr.push(arr2.pop());
    if (!arr1[arr1.length-1] && arr2[arr2.length-1]) returnArr.push(arr2.pop());
    if (!arr2[arr2.length-1] && arr1[arr1.length-1]) returnArr.push(arr1.pop());
  }
  return returnArr;
}
//O(n)

// const arr1 = [1, 3, 6, 8, 11];
// const arr2 = [2, 3, 5, 8, 9, 10];

// console.log(mergeArrays(arr1, arr2));

function removeCharacters (string, chars) {
  let returnString ='';
  for (let i=0; i<string.length; i++) {
    if (!chars.includes(string[i])) {
      returnString += string[i];
    }
  }
  return returnString;
}
//O(n)

// const testString = 'Battle of the Vowels: Hawaii vs. Grozny';
// const testChars = 'aeiou';

// console.log(removeCharacters(testString, testChars));


function products (arr) {
  let total=1;
  for (let i=0; i<arr.length; i++) total *= arr[i];

  let returnArr =[];
  for (let i=0; i<arr.length; i++) {
    returnArr.push(total/arr[i]);
  }
  return returnArr;
}
//O(n)

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

// console.log(products([1, 3, 9, 4]));

function d2Array (d2Arr) {
  let ArrCopy = d2Arr.map(arr => arr.slice());
  let y = d2Arr.length;
  let x = d2Arr[0].length;
  for (let i=0; i<y;i++) {
    for (let j=0; j<x;j++) {
      if (d2Arr[i][j] === 0) {
        d2Arr.forEach((val, row) => ArrCopy[row][j] = 0); //Set each element in the column to zero
        d2Arr[i].forEach((val, k) => ArrCopy[i][k] = 0); //Set each element in the row to zero
        
      }
    }
  }
  return ArrCopy;
}
//O(n^3) --- absolutely could use optimization

const d2Arr = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];

const zeroed = d2Array(d2Arr);
console.log(zeroed[0]);
console.log(zeroed[1]);
console.log(zeroed[2]);
console.log(zeroed[3]);
console.log(zeroed[4]);


function stringRotation (str1, str2) {
  if (str1.length !== str2.length) return false;
  for (let i=0; i<str1.length; i++) {
    if (str1[i] === str2[0]) {
      let firstHalf = str1.slice(0, i);
      let secondHalf = str1.slice(i, str1.length);
      if(str2 === (secondHalf+firstHalf)) return true;
    }
  }
  return false;
}
//O(n)

// console.log(stringRotation('amazon', 'azonma'));
// console.log(stringRotation('amazon', 'azonam'));