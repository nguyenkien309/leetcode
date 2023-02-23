//Plus One
// +1 at last index of array

digits = [1, 2, 3];
const plusOne = (digits) => {
  let string = '';
  for (i = 0; i < digits.length; i++) {
    string += digits[i];
  }
  const digitx = parseInt(string) + 1;
  const myArray = string.split('').map((x) => +x);

  console.log(
    digitx
      .toString()
      .split('')
      .map((x) => parseInt(x))
  );
};
//2nd way : return (BigInt(digits.join('')) + 1n).toString().split('').map(Number);
plusOne(digits);
