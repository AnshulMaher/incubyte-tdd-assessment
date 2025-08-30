function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function stringCalculator(input) {
  if (input === "") return 0;

  let delimiters = /,|\n/;
  let numbersString = input;

  if (input.startsWith("//")) {
    const match = input.match(/^\/\/(.)\n(.*)/);
    if (match) {
      delimiters = new RegExp(escapeRegExp(match[1]));
      numbersString = match[2];
    }
  }

  const numbers = numbersString.split(delimiters).map(Number);
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

module.exports = stringCalculator;
