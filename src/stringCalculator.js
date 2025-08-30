const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const getDelimitersRegex = (match) => {
  if (!match) {
    return /,|\n/;
  }

  let delimiterPart = match[1];
  if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
    delimiterPart = [...delimiterPart.matchAll(/\[([^\]]+)\]/g)]
      .map((m) => escapeRegExp(m[1]))
      .join("|");
  }

  return new RegExp(delimiterPart);
};

const stringCalculator = (input) => {
  if (input === "") return 0;

  const match = input.match(/^\/\/(.*?)\n(.*)/s);
  const delimiters = getDelimitersRegex(match);
  const numbersString = match ? match[2] : input;

  const negatives = [];
  let sum = 0;
  let numberStrs = numbersString.split(delimiters);
  for (const numStr of numberStrs) {
    const n = Number(numStr);
    if (n < 0) negatives.push(n);
    else if (n <= 1000) sum += n;
  }

  if (negatives.length) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return sum;
};

module.exports = stringCalculator;
