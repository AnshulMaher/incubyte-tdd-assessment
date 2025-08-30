function stringCalculator(input) {
  if (input === "") return 0;

  const numbers = input.split(",").map(Number);
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

module.exports = stringCalculator;
