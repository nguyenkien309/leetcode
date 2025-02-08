// /**
//  * Jump Game
//  * https://leetcode.com/problems/jump-game/description
//  * Input: nums = [2,3,1,1,4]
//  * Output: true
//  * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
//  */

nums = [2, 3, 1, 1, 4];
// [2, 5, 0, 0]
// [3,2,1]
// [2,1,0,0]
// [1,2,3]
// [2,0]
// [3, 2, 1, 0, 4]
// [0]
// [1, 0, 1, 0]
// [0, 2, 3]
// [0, 1]
// [2, 0, 2]

var canJump = function (nums) {
  const goal = nums.length - 1;
  let reach = 0;

  // Loop to reach 
  for (i = 0; i <= reach; i++) {
    // TODO
    // Add the explanation later
    reach = Math.max(reach, i + nums[i]);
    if (reach >= goal) return true;
  }

  return false;
};

console.log(canJump(nums));
