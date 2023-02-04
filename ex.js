//Product of Array except itself
digits = [1, 2, 3, 4];
const plusOne = (digits) => {
  let sum = 1;
  for (i = 0; i < digits.length; i++) {
    sum *= digits[i];
  }
  return digits.map((x) => sum / x);
};
plusOne(digits);
