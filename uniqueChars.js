//  check string is unique without duplicate char
const uniqueChars = (str) => {
  const chars = new Set(str);
  return chars.size === str.split("").length;
};

console.log(uniqueChars("abcde"));
