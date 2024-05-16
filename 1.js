//Two Sum
nums = [2, 5, 5, 11];
target = 10;

// O(n^2)
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

// O(n)
const twoSum2 = (nums, target) => {
  for (i = 0; i < nums.length - 1; i++) {
    const flag = nums.indexOf(target - nums[i], i + 1);
    if (flag !== -1) return [i, nums.indexOf(target - nums[i], i + 1)];
  }

  return null;
};

console.log(twoSum2([3, 2, 4], 6));


// const twoSum = (arr, target) => {
//   const arrMap = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     const expectNum = target - num;

//     if (arrMap.has(expectNum)) {
//       return [num, expectNum];
//     }

//     arrMap.set(num, i);
//   }

//   return null;
// };
