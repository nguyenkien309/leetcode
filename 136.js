nums = [2, 2, 5, 9, 9];

const singleNumber = (nums) => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      console.log(nums[i]);
      return;
    }
  }
};

singleNumber(nums);
