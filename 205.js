//Isomorphic Strings
// s[i] = t[i] ? => ! => false
// egg  = add => egg = agg

s = 'egg';
t = 'add';
const isIsomorphic = (s, t) => {
  if (s.length != t.length) return false;
  for (let i = 0; i < s.length; i++) {
    console.log(s.indexOf(s[i], i + 1));
    if (s.indexOf(s[i], i + 1) != t.indexOf(t[i], i + 1)) return false;
  }
  return true;
};

isIsomorphic(s, t);
