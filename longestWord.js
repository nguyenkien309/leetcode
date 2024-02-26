// find longest word in string
const longestWord = (str) => {
  const words = str.split(" ").sort((a, b) => b.length - a.length);
  return words[0];
};

console.log(longestWord("The quick brown fox jumped over the lazy dog"));
