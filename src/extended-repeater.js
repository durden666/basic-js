const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1 
  } else {
    options.additionRepeatTimes;
  }
  // 
  if (!options.repeatTimes) {
    options.repeatTimes = 1
  } else {
    options.repeatTimes;
  }
  // 
  if (!options.separator ) {
    options.separator = '+'
  } else {
    options.separator;
  }
  // 
  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  } else {
    options.additionSeparator;
  }
  // 
  if (options.addition || options.addition === false || options.addition === null) {
    String(options.addition)
  } else {
    options.addition = '';
  }
  // 
  let substring = `${options.addition}${options.additionSeparator}`.repeat(options.additionRepeatTimes).slice(0, -`${options.additionSeparator.length}`);
  // 
  let string = `${str}${substring}${options.separator}`.repeat(options.repeatTimes).slice(0, -`${options.separator.length}`);

  return string;
};