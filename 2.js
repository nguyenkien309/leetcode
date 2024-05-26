/**
 * Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/description/
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Explanation: 342 + 465 = 807.
 */

const addTwoNumbers = (l1, l2) => {
  const result = [];
  const maxLength = l1.length >= l2.length ? l1.length : l2.length;
  let debt = 0;

  for (let i = 0; i < maxLength; i++) {
    const num1 = l1[i] || 0;
    const num2 = l2[i] || 0;
    const total = num1 + num2 + debt;

    // Set the debt by round the total down
    debt = Math.floor(total / 10);

    // Push the number after divide and get the remainder
    result.push(total % 10);
  }

  // The remaining debt after the loop
  if (debt > 0) {
    result.push(debt);
  }

  return result;
};

// let l1 = [0];
// let l2 = [0];

// let l1 = [2, 4, 3];
// let l2 = [5, 6, 4];

let l1 = [9, 9, 9, 9, 9, 9, 9];
let l2 = [9, 9, 9, 9];

console.log(addTwoNumbers(l1, l2));
