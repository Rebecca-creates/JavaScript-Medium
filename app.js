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
        timerMinutes = '0' + timerMinutes
    }

    return timerMinutes + ':' + timerSeconds;
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
