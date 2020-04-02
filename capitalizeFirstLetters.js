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

module.exports = capitalizeFirstLetters;