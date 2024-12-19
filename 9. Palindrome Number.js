var isPalindrome = function (x) {
  if (x < 0 || (x != 0 && x % 10 == 0)) {
    return false;
  }

  let half = 0;

  while (x > half) {
    half = half * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x == half || x == Math.floor(half / 10);
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
