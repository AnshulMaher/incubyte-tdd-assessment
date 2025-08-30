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

  test("supports new lines as separators", () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
  });

  test("supports custom delimiter syntax", () => {
    expect(stringCalculator("//;\n1;2")).toBe(3);
  });

  test("throws error listing negative numbers", () => {
    expect(() => stringCalculator("1,-2,3,-4")).toThrow(
      "Negatives not allowed: -2, -4"
    );
  });

  test("ignores numbers greater than 1000", () => {
    expect(stringCalculator("2,1001")).toBe(2);
  });

  test("supports delimiters of any length", () => {
    expect(stringCalculator("//[***]\n1***2***3")).toBe(6);
  });

  test("supports multiple delimiters including multi-character delimiters", () => {
    expect(stringCalculator("//[*][%]\n1*2%3")).toBe(6);
    expect(stringCalculator("//[***][%%%]\n4***5%%%6")).toBe(15);
  });
});
