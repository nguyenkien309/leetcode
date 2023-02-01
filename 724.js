//Find Pivot Index
nums = [1, 7, 3, 6, 5, 6];
const pivotIndex = (nums) => {
  const total = nums.reduce((a, b) => a + b);
  let ls = 0;
  for (i = 0; i < nums.length; i++) {
    rs = total - ls;
    ls += nums[i];
    if (rs == ls) {
      return i;
    }
  }
  return -1;
};
pivotIndex(nums);
