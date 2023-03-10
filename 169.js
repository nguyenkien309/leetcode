//Majority Element

nums = [1, 2, 2, 3, 4, 5];
const majorityElement = (nums) => {
  nums.sort((a, b) => a - b);
  let currentMax = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > currentMax && nums[i] == nums[i + 1]) {
      currentMax = nums[i];
    }
  }
  console.log(currentMax);
  return currentMax;
};

majorityElement(nums);
