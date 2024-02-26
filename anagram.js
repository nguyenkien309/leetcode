// example: listen == silent (reverse)

const checkAnagram = (str1, str2) => {
  const sortStr1 = str1.split("").sort().join("");
  const sortStr2 = str2.split("").sort().join("");

  return sortStr1 === sortStr2;
};

console.log(checkAnagram("listen", "silent"));
