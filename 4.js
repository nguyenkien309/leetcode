/**
 * Median of Two Sorted Arrays
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 */

(nums1 = [1, 3]), (nums2 = [2]);
const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);

  const arraylength = mergedArray.length;
  const midIndex = Math.floor(arraylength / 2);

  if (arraylength % 2) {
    return Number(mergedArray[midIndex]).toFixed(5);
  }

  return Number(
    ((mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2).toFixed(5)
  );
};

console.log(findMedianSortedArrays(nums1, nums2));
