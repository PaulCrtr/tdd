function capitalizeFirstLetters(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[0] || str[i - 1] === " ") {
      newStr = newStr.concat(str[i].toUpperCase());
    } else {
      newStr = newStr.concat(str[i]);
    }
  }
  return newStr;
}

const assert = require("assert");

assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters("javaScript"), "JavaScript");
assert.strictEqual(capitalizeFirstLetters(""), "");
assert.strictEqual(
  capitalizeFirstLetters("bonjour monsieur ok"),
  "Bonjour Monsieur Ok"
);
