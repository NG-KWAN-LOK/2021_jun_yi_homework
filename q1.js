const q1a = (str) => {
  const ans = str.split("");
  return ans.reverse().join("");
};
const q1b = (str) => {
  const splitStr = str.split(" ");
  let ans = [];
  splitStr.forEach((word) => {
    ans.push(q1a(word));
  });
  return ans.join(" ");
};

exports.q1a = q1a;
exports.q1b = q1b;
