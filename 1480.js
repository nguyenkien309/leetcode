//Running Sum of 1d Array
nums = [1, 2, 3, 4];
const runningSum = (nums) => {
  for (i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  console.log(nums);
};
runningSum(nums);
