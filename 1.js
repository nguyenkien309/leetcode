//Two Sum

nums = [2, 5, 5, 11];
target = 10;
const twoSum = (nums, target) => {
  for (i = 0; i < nums.length; i++) {
    fn = nums[i];
    for (j = 1; j < nums.length; j++) {
      Sn = nums[j];
      if (fn + Sn == target) {
        console.log([i, j]);
        //   return [i, j];
      }
    }
  }
};
twoSum(nums, target);
