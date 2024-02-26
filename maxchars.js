const maxChars = (str) => {
  const strArray = str.split("");
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < strArray.length; i++) {
    let char = strArray[i];
    let charCount = strArray.filter((c) => c === char).length;
    if (charCount > maxCount) {
      maxChar = char;
      maxCount = charCount;
    }
  }

  return maxChar;
};

console.log(maxChars("javascript"));
