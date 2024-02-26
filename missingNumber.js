// Given an array of n-1 integers in the range from 1 to n, write a function to find the missing number in the array. Assume there are no duplicates.
// Example Input: [1, 2, 4, 6, 3, 7, 8]
// Example Output: 5

const missingNumber = (arr) => {
  const sumToN = ((arr.length + 1) * (arr.length + 2)) / 2;
  const sumArray = arr.reduce((a, b) => a + b, 0);

  return sumToN - sumArray;
};

console.log(missingNumber([1, 2, 4, 6, 3, 7, 8]));
