//Two Sum
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const removeDuplicates = (nums) => {
//   const unique = [...new Set(nums)];
//   return unique;
// };
const removeDuplicates = (nums) => {
  arr = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      arr.push(nums[i]);
    } else {
    }
  }
};
removeDuplicates(nums);
