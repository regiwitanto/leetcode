var longestCommonPrefix = function (strs) {
  let result = '';

  if (strs.length === 0) {
    return result;
  }

  const base = strs[0];
  for (let i = 0; i < base.length; i++) {
    const char = base[i];
    for (let j = 1; j < strs.length; j++) {
      if (char !== strs[j][i]) {
        return result;
      }
    }

    result = result + char;
  }

  return result;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
