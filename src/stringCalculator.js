function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function stringCalculator(input) {
  if (input === "") return 0;

  let delimiters = /,|\n/;
  let numbersString = input;

  if (input.startsWith("//")) {
    const match = input.match(/^\/\/(.*?)\n(.*)/s);
    if (match) {
      delimiters = match[1];
      if (delimiters.startsWith("[") && delimiters.endsWith("]")) {
        delimiters = [...delimiters.matchAll(/\[([^\]]+)\]/g)]
          .map((m) => escapeRegExp(m[1]))
          .join("|");
      }
      delimiters = new RegExp(delimiters);
      numbersString = match[2];
    }
  }

  const numbers = numbersString.split(delimiters).map(Number);

  const negatives = numbers.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return numbers.reduce((acc, curr) => (curr <= 1000 ? acc + curr : acc), 0);
}

module.exports = stringCalculator;
