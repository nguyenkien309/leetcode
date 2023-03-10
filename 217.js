//Contains Duplicate
nums = [1, 2, 3, 4];
const containsDuplicate = (nums) => {
  const duplicate = nums.filter(
    (num, index) => nums.sort((a, b) => a - b).indexOf(num) !== index
  );
  console.log(duplicate);
  return duplicate.length;
};

containsDuplicate(nums);
