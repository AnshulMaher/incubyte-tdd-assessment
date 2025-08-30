const stringCalculator = require("../src/stringCalculator");

describe("StringCalculator", () => {
  test("returns 0 for empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  test("returns number itself for single number input", () => {
    expect(stringCalculator("7")).toBe(7);
  });

  test("returns sum of two numbers separated by comma", () => {
    expect(stringCalculator("1,2")).toBe(3);
  });

  test("sums unknown number of numbers", () => {
    expect(stringCalculator("1,2,3,4,5")).toBe(15);
  });
});
