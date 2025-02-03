/**
 * Rotate Array
 * https://leetcode.com/problems/rotate-array/description
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation: Move numbers from K position to the top of the array
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * NOTE: Do not return anything, "MODIFY NUMS IN-PLACE INSTEAD".
 */

nums = [1,2,3,4,5,6,7];
k  = 3

var rotate = function (nums, k) {
    // In case K greater than the length of the array
    // The division of the residue
    // For example k = 3, length of the number nums.length = 7 -> 3 % 7 -> residual 4
    // Then will cut the array nums from the position (Nums.Length - 4) to the end -> The value after being taken will always be guaranteed from 0 to (Nums.Lenggth - 4)
    if (k > nums.length) { 
        k = k % nums.length;
    }

    const spliceAt = nums.length - k;
    const splicedNum = nums.splice(spliceAt);

    // Move the nums that spliced to the front
    // Using unshift because splicedNum will return the array that has been Splice, then Numbers will be cut from spliceAt.
    nums.unshift(...splicedNum);

    return nums;
};

// Could be done in shorter way
// var rotate = function(nums, k) {
//     k %= nums.length;
//     nums.unshift(...nums.splice(nums.length - k));
//     return nums;
// };

console.log(rotate(nums, k));