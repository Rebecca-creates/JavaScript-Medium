/* Q1: Given two values, return the first one if it is false, otherwise return the second one. */

function filterOutFalsy(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

console.log(filterOutFalsy(0, 500));

/* Q2: Return the length of any given array */

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 2, 3, 4]));

/* Q3: Get the last element in an array */

function arrLength(arr) {
  return arr.length - 1;
}

console.log(arrLength([0, 1, 2, 3]));

/* Q4: Given an array, return the sum of every element */

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(arrSum([2, 2, 2]));

/* Q5: Add up the numbers from a single number - Given a number, add up all th numbers from one to the number that is given Ex. An input of 4 will give you 1+2+3+4=10 */

function progressiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; ++i) {
    sum = sum + i;
  }
  return sum;
}

console.log(progressiveSum([4]));

/* Q6: Calculate the time. Given a number in seconds, return this number in mm:ss format. */

function calcTIme(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  if (timerMinutes.toString().length === 1) {
    timerMinutes = "0" + timerMinutes;
  }

  return timerMinutes + ":" + timerSeconds;
}

console.log(calcTIme(70));

/* Q7: Find largest number. Given an array of numbers, return the largest number of the array. */

function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(getMax([-100, -200, -300]));

/* Q8: Reverse a string */

//INCREMENTING FOR LOOP
function reversedString(str) {
  let reversedString = "";
  for (let i = 0; i < str.length; ++i) {
    //this is how you loop through every character in a string
    reversedString = str[i] + reversedString;
  }
  return reversedString;
}

console.log(reversedString("abc"));

//DECREMENTNG FOR LOOP (won't have to use this)
function reversedString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; --i) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reversedString("abc"));

//ARRAY REVERSE PROPERTY: EASIEST!
function reversedString(str) {
  return str.split("").reverse().join("");
}

console.log(reversedString("abc"));

/* Q9: Turn every element in an array into zeros */
//FOR LOOP
function convertToZeros(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = 0;
  }
  return newArr;
}

console.log(convertToZeros([1, 2, 3, 4, 5, 6]));

//ARRAY 'FILL'
function convertToZeros(arr) {
  return new Array(arr.length).fill(0);
}

console.log(convertToZeros([1, 2, 3, 4, 5, 6]));

//ARRAY 'MAP'
function convertToZeros(arr) {
  return arr.map((elem) => 0);
}

console.log(convertToZeros([1, 2, 3, 4, 5, 6]));

/* Q10: Filter out. Given an array of fruits, if it is an apple, remove it from the array. */

//FOR LOOP
function removeApples(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== "apple") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeApples(["banana", "apple", "orange", "apple"]));

//FILTER
function removeApples(arr) {
  return arr.filter((elem) => elem !== "apple");
}

console.log(removeApples(["banana", "orange", "apple", "cherry"]));

/* Q11: Filter out Falsy Values */
//FOR LOOP
function filterOutFalsy(arr) {
  let truthyArr = [];
  for (let i = 0; i < arr.length; ++i) {
    if (!!arr[i] === true) {
      truthyArr.push(arr[i]);
    }
  }
  return truthyArr;
}

console.log(filterOutFalsy(["null", "apple", "false", "apple", [], 0]));

//ARRAY FILTER
function filterOutFalsy(arr) {
  return arr.filter((elem) => !!elem === true);
}

console.log(filterOutFalsy(["null", "apple", "false", "apple", [], 0]));

/* Q12: Truthy to true, Falsy to false. Given an array of truthy and falsy values, return the same array of elements into its boolean value.*/
function convertToBoolean(arr) {
  return arr.map((elem) => !!elem);
}

console.log(convertToBoolean([500, 0, "David", "", []]));
