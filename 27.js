//Remove Element

nums = [3, 2, 2, 3];
val = 3;
array = [];
const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      array.push(nums[i]);
    }
  }
  return array.length;
};

removeElement(nums, val);
