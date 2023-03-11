nums = -1234;
const reverseNumber = (num) => {
  let reverse = 0;
  let check = num < 0 ? -num : num;
  while (check != 0) {
    reverse += (check % 10).toString();
    check = Math.floor(check / 10);
  }
  return reverse < 0x7fffffff ? (nums < 0 ? -reverse : -(-reverse)) : 0;
};
console.log(reverseNumber(nums));
