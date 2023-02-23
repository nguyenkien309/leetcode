// Is Subsequence
// s = "abc", t = "ahbgdc"
// s[i] in t[] ?

s = 'abc';
t = 'ahbgdcc';
const isSubsequence = (s, t) => {
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (s.includes(t[i])) count++;
  }
  if (count >= s.length) return true;
};

isSubsequence(s, t);
