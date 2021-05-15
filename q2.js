exports.q2 = (inputNumber) => {
  let ans = 0;
  for (i = 1; i <= inputNumber; i++) {
    if (i % 15 == 0) ans += 1;
    else if (i % 3 == 0 || i % 5 == 0) continue;
    else ans += 1;
  }
  return ans;
};
