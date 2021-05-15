const { q1a, q1b } = require("./q1");
const { q2 } = require("./q2");
test("Q1(A): junyiacademy == ymedacaiynuj", () => {
  expect(q1a("junyiacademy")).toBe("ymedacaiynuj");
});

test("Q1(B): flipped class room is important == deppilf ssalc moor si tnatropmi", () => {
  expect(q1b("flipped class room is important")).toBe(
    "deppilf ssalc moor si tnatropmi"
  );
});

test("Q2: input: 15 => output: 9", () => {
  expect(q2(15)).toBe(9);
});
