//Search Insert Position

nums = [3, 5, 7, 9, 10];
target = 8;
const searchInsert = (nums, target) => {
  const check = nums.includes(target)
    ? nums.indexOf(target)
    : [...nums, target].sort((a, b) => a - b).indexOf(target);
  return check;
};

searchInsert(nums, target);
