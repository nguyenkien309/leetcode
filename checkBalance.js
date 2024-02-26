const checkBalance = (str) => {
  const strMap = new Map([
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ]);
  str = str.trim().split(" ");
  let strLength = str.length - 1;
  for (char of str) {
    if (strMap.get(char) != str[strLength]) {
      return false;
    }
    if (strLength === Math.round(str.length / 2)) {
      break;
    }
    strLength--;
  }
  return true;
};

console.log(checkBalance("[ ( ) ]"));
