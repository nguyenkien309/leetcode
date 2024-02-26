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
