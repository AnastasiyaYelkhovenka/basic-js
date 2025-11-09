/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const strString = String(str);
  
  const {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator = '|'
  } = options;
  
  let additionString = '';

  if (addition !== undefined) {
    const additionStr = String(addition);
    
    if (additionRepeatTimes !== undefined && additionRepeatTimes > 0) {
      additionString = Array(additionRepeatTimes).fill(additionStr).join(additionSeparator);
    } else {
      additionString = additionStr;
    }
  }
  
  const baseStr = strString + additionString;
  
  if (repeatTimes !== undefined && repeatTimes > 0) {
    return Array(repeatTimes).fill(baseStr).join(separator);
  } else {
    return baseStr;
  }
}

module.exports = {
  repeater
};
