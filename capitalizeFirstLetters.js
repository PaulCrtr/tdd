function capitalizeFirstLetters(str) {
    return str.split(' ').map(x=>x[0].toLowerCase())
}


const assert = require('assert')

assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters("javaScript"), "JavaScript");
assert.strictEqual(capitalizeFirstLetters(""), "");
assert.strictEqual(capitalizeFirstLetters("bonjour monsieur ok"), "Bonjour Monsieur Ok");