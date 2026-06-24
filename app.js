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
